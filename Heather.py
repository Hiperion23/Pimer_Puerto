import tkinter as tk
import time
import threading
import math
import random

# Letras de la canción con tiempos
lyrics_timeline = [
    (0, ""), (4, "I still remember"), (6, "third of December"),
    (9, "me in your sweater"), (11, "You said it looked better"),
    (13.5, "on me than it did you"), (17, "Only if you knew"),
    (20, "how much I liked you"),
    (22, "But I watch your eyes"), (24, "as she Walks by"),
    (26.5, "What a sight for"), (30, "sore eyes"), (32.5, "Brighter than the"),
    (35, "blue sky"), (37, "She's got you mesmerized"), (43, "while I die"),
    (46, "Why would you ever kiss me?"),
    (50, "I'm not even half as pretty"),
    (56, "You gave her your sweater"), (58.5, "it's just polyester"),
    (61, "But you like her better"), (63.5, "Wish I were Heather"),(70, ""), (80, ""),


    """ (61, ""), (63, "Watch as she stands with her"),
    (66, "holding your hand"),
    (69, "Put your arm 'round her shoulder"),
    (72, "now I'm getting colder"),
    (75, "But how could I hate her?"),
    (78, "She's such an angel"),
    (81, "But then again"),
    (83, "kinda wish she were dead"),
    (85, "as she"), (86, "Walks by"), (88, "What a sight for"),
    (90, "sore eyes"), (92, "Brighter than the"),
    (94, "blue sky"),
    (96, "She's got you mesmerized"), (98, "while I die"),
    (101, ""), (103, "Why would you ever kiss me?"),
    (107, "I'm not even half as pretty"),
    (111, "You gave her your sweater"),
    (114, "it's just polyester"),
    (117, "But you like her better"),
    (120, "I wish I were Heather"),
    (125, ""), (127, "I wish I were Heather"),
    (131, "(Oh, oh)"), (134, "Wish I were Heather"),
    (138, ""), (140, "Why would you ever kiss me?"),
    (144, "I'm not even half as pretty"),
    (148, "You gave her your sweater"),
    (151, "it's just polyester"),
    (154, "But you like her better"),
    (157, "Wish I were-"), (160, "") """
]


class LyricsWindow:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Heather")
        self.root.geometry("900x500")
        self.root.configure(bg="#000")

        # Canvas principal
        self.canvas = tk.Canvas(self.root, bg="#000", highlightthickness=0)
        self.canvas.pack(fill="both", expand=True)

        # Variables para evitar resize múltiple
        self.resize_after_id = None
        self.last_width = 0
        self.last_height = 0

        # Redimensionar
        self.root.bind("<Configure>", self.schedule_resize)

        # Fondo (barras)
        self.lines = []
        self.num_lines = 350
        self.init_wave()

        # Efecto glow exterior (múltiples capas)
        self.glow_layers = []
        glow_colors = ["#0066ff", "#0099ff", "#00ccff"]
        
        for color in glow_colors:
            self.glow_layers.append(
                self.canvas.create_text(0, 0, text="", font=("Arial Black", 58, "bold"), fill=color)
            )

        # Sombra principal con efecto neón
        self.shadow_id = self.canvas.create_text(
            0, 0, text="", font=("Arial Black", 58, "bold"), fill="#1a0033"
        )

        # Texto central con gradiente simulado
        self.lyric_id = self.canvas.create_text(
            0, 0, text="", font=("Arial Black", 58, "bold"), fill="#00ffff"
        )

        # Texto superior (efecto de brillo)
        self.highlight_id = self.canvas.create_text(
            0, 0, text="", font=("Arial Black", 58, "bold"), fill="#ffffff"
        )

        self.current_index = 0
        self.time_counter = 0

        # Posicionar elementos inicialmente
        self.root.update_idletasks()
        self.update_layout()

        # Iniciar animaciones
        self.start_lyrics()
        self.animate_wave()
        self.animate_glow()

    # ---------------------- PROGRAMAR REDIMENSIONAMIENTO ----------------------
    def schedule_resize(self, event):
        """Evita llamadas múltiples durante el redimensionamiento"""
        if self.resize_after_id:
            self.root.after_cancel(self.resize_after_id)
        self.resize_after_id = self.root.after(100, self.update_layout)

    # ---------------------- ACTUALIZAR LAYOUT ----------------------
    def update_layout(self):
        """Actualiza el layout completo de la ventana"""
        w = self.canvas.winfo_width()
        h = self.canvas.winfo_height()

        if w <= 1 or h <= 1:
            return

        if w == self.last_width and h == self.last_height:
            return

        self.last_width = w
        self.last_height = h

        cx = w // 2
        cy = h // 2

        base_size = min(w, h)
        font_size = max(20, int(base_size * 0.08))

        self.canvas.itemconfig(self.lyric_id, font=("Arial Black", font_size, "bold"))
        self.canvas.coords(self.lyric_id, cx, cy)

        self.canvas.itemconfig(self.highlight_id, font=("Arial Black", font_size, "bold"))
        self.canvas.coords(self.highlight_id, cx, cy - 2)

        self.canvas.itemconfig(self.shadow_id, font=("Arial Black", font_size, "bold"))
        self.canvas.coords(self.shadow_id, cx + 3, cy + 3)

        for glow in self.glow_layers:
            self.canvas.itemconfig(glow, font=("Arial Black", font_size, "bold"))
            self.canvas.coords(glow, cx, cy)

        spacing = 2
        start_x = cx - (self.num_lines * spacing) / 2

        for i, bar in enumerate(self.lines):
            bar["x"] = start_x + i * spacing

    def init_wave(self):
        for i in range(self.num_lines):
            line = self.canvas.create_line(0, 0, 0, 0, fill="#ffffff", width=1)
            self.lines.append({
                "id": line,
                "x": 0,
                "phase": random.uniform(0, 10),
                "random_amp": random.uniform(20, 140)
            })

    # ------------------- ANIMACIÓN DEL FONDO -------------------
    def animate_wave(self):
        self.time_counter += 0.07
        t = self.time_counter

        h = self.canvas.winfo_height()
        if h <= 1:
            self.root.after(30, self.animate_wave)
            return

        cy = h // 2

        for bar in self.lines:
            wave = (
                math.sin(t * 3 + bar["phase"]) * bar["random_amp"] +
                math.sin(t * 1.2) * 60 +
                random.uniform(-25, 25)
            )

            h_wave = max(5, min(h * 0.35, abs(wave)))

            self.canvas.coords(
                bar["id"],
                bar["x"], cy - h_wave,
                bar["x"], cy + h_wave
            )

            # Color según intensidad con tonos cyan/azul
            intensity = h_wave / (h * 0.35)
            r = int(20 + intensity * 100)
            g = int(120 + intensity * 135)
            b = 255
            
            # Asegurar que los valores estén en rango válido (0-255)
            r = max(0, min(255, r))
            g = max(0, min(255, g))
            b = max(0, min(255, b))
            
            color = f"#{r:02x}{g:02x}{b:02x}"
            self.canvas.itemconfig(bar["id"], fill=color)

        self.root.after(30, self.animate_wave)

    # ------------------- ANIMACIÓN GLOW FUTURISTA -------------------
    def animate_glow(self):
        pulse = (math.sin(self.time_counter * 2) + 1) / 2  # 0 a 1
        
        # Animación sutil del glow
        for i, glow in enumerate(self.glow_layers):
            opacity_base = 30 + int(pulse * 40)
            opacity = opacity_base - (i * 10)
            
            # Asegurar valores válidos
            opacity = max(0, min(255, opacity))
            
            # Colores glow que pulsan suavemente
            if i == 0:
                r = opacity
                g = min(255, int(opacity * 1.5))
                b = 255
            elif i == 1:
                r = int(opacity * 0.5)
                g = min(255, int(opacity * 1.2))
                b = 255
            else:
                r = 0
                g = int(opacity * 0.8)
                b = min(255, int(200 + pulse * 55))
            
            # Asegurar rango válido
            r = max(0, min(255, r))
            g = max(0, min(255, g))
            b = max(0, min(255, b))
            
            color = f"#{r:02x}{g:02x}{b:02x}"
            self.canvas.itemconfig(glow, fill=color)

        self.root.after(50, self.animate_glow)

    # ------------------- LETRAS SINCRONIZADAS -------------------
    def start_lyrics(self):
        thread = threading.Thread(target=self.update_lyrics)
        thread.daemon = True
        thread.start()

    def update_lyrics(self):
        start = time.time()

        while self.current_index < len(lyrics_timeline):
            elapsed = time.time() - start
            timestamp, lyric = lyrics_timeline[self.current_index]

            if elapsed >= timestamp:
                # Actualizar todas las capas
                self.canvas.itemconfig(self.lyric_id, text=lyric)
                self.canvas.itemconfig(self.highlight_id, text=lyric)
                self.canvas.itemconfig(self.shadow_id, text=lyric)
                
                for glow in self.glow_layers:
                    self.canvas.itemconfig(glow, text=lyric)

                self.current_index += 1

            time.sleep(0.05)

    def run(self):
        self.root.mainloop()


if __name__ == "__main__":
    LyricsWindow().run()