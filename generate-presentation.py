#!/usr/bin/env python3
"""
AI Transformation Advisory — Sales Presentation v4
Apple-style light design matching the React reference:
Space Grotesk headings, Inter body, glass cards, #0071e3 accent, light bg
"""

from playwright.sync_api import sync_playwright
import os

# ─── Palette (from React reference) ──────────────────────────────────────────

BLACK     = "#1d1d1f"
WHITE_BG  = "#f5f5f7"
WHITE     = "#ffffff"
ACCENT    = "#0071e3"
GRAY      = "#86868b"
GRAY_L    = "#e8e8ed"
GRAY_D    = "#6e6e73"

# Glass card
GLASS     = "background: rgba(255,255,255,0.70); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 8px 32px rgba(0,0,0,0.05);"
GLASS_BORDER = f"border: 1px solid {GRAY_L};"

CSS = f"""
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;500;700&display=swap');

@page {{ size: 1920px 1080px; margin: 0; }}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font-family: "Inter", system-ui, sans-serif; -webkit-font-smoothing: antialiased; color: {BLACK}; }}

h1, h2, h3, h4, .display {{ font-family: "Space Grotesk", system-ui, sans-serif; }}

.s {{
  width: 1920px; height: 1080px;
  page-break-after: always;
  overflow: hidden; position: relative;
  display: flex; flex-direction: column;
  background: {WHITE_BG};
}}
.s:last-child {{ page-break-after: auto; }}

/* ── BGs ── */
.bg-white {{ background: {WHITE_BG}; }}
.bg-black {{ background: {BLACK}; color: {WHITE}; }}

/* ── Ambient blurs ── */
.amb::before, .amb::after {{
  content: ''; position: absolute; border-radius: 50%; pointer-events: none;
}}
.amb::before {{
  top: -20%; left: -10%; width: 60%; height: 60%;
  background: rgba(0,113,227,0.03); filter: blur(150px);
}}
.amb::after {{
  bottom: -20%; right: -10%; width: 60%; height: 60%;
  background: rgba(0,113,227,0.03); filter: blur(150px);
}}

/* Dot grid */
.dots {{
  background-image: radial-gradient({BLACK} 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.015;
  position: absolute; inset: 0; pointer-events: none;
}}

/* ── Type ── */
.hero {{ font-size: 96px; font-weight: 700; line-height: 1.05; letter-spacing: -0.04em; }}
.big {{ font-size: 72px; font-weight: 700; line-height: 1.1; letter-spacing: -0.035em; }}
.title {{ font-size: 56px; font-weight: 700; line-height: 1.15; letter-spacing: -0.03em; }}
.sub {{ font-size: 22px; font-weight: 300; line-height: 1.6; color: {GRAY}; max-width: 720px; }}
.body {{ font-size: 20px; font-weight: 400; line-height: 1.7; color: {GRAY}; }}
.label {{
  font-size: 12px; font-weight: 700; letter-spacing: 0.8em;
  text-transform: uppercase; color: {ACCENT};
  font-family: "Inter", sans-serif;
}}

.accent {{ color: {ACCENT}; }}

/* ── Glass card ── */
.glass {{ {GLASS} border-radius: 40px; padding: 48px; }}
.glass-sm {{ {GLASS} border-radius: 32px; padding: 40px; }}

/* ── Simple card ── */
.card {{
  background: {WHITE}; border: 1px solid {GRAY_L};
  border-radius: 40px; padding: 48px;
}}

/* ── Black card ── */
.card-black {{
  background: {BLACK}; color: {WHITE};
  border-radius: 40px; padding: 48px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}}

/* ── Progress bar ── */
.bar {{ height: 6px; width: 100%; background: {WHITE}; border-radius: 3px; overflow: hidden; }}
.bar-fill {{ height: 100%; border-radius: 3px; }}
.bar-gray {{ background: {GRAY}; }}
.bar-accent {{ background: {ACCENT}; }}

/* ── Grids ── */
.g2 {{ display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }}
.g3 {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; }}
.g4 {{ display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 32px; }}
.split {{ display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }}

/* ── Centering ── */
.center {{ display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; flex: 1; position: relative; z-index: 1; }}
.pad {{ padding: 80px 100px; }}

/* ── Nav dot (slide number) ── */
.pn {{
  position: absolute; bottom: 48px; right: 48px;
  font-size: 14px; font-weight: 700; color: {GRAY};
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.1em; opacity: 0.5;
}}

/* ── Logo ── */
.logo {{
  position: absolute; top: 48px; left: 48px; z-index: 10;
  display: flex; align-items: center; gap: 16px;
}}
.logo-icon {{
  width: 40px; height: 40px; background: {BLACK};
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  color: white; font-family: "Space Grotesk"; font-weight: 700; font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}}
.logo-text {{ display: flex; flex-direction: column; }}
.logo-name {{ font-family: "Space Grotesk"; font-weight: 900; font-size: 24px; letter-spacing: -0.04em; line-height: 1; }}
.logo-sub {{ font-size: 8px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: {ACCENT}; }}

/* ── Bullet dot ── */
.dot {{ width: 6px; height: 6px; border-radius: 50%; background: {ACCENT}; flex-shrink: 0; margin-top: 10px; }}
"""

def logo():
    return f"""<div class="logo">
      <div class="logo-icon">AI</div>
      <div class="logo-text">
        <span class="logo-name">ATA</span>
        <span class="logo-sub">AI Transformation</span>
      </div>
    </div>"""

def pn(n):
    return f'<div class="pn">{str(n).zfill(2)} / 15</div>'

def tech_bg():
    return f"""<div class="dots"></div>
    <div style="position:absolute;top:-20%;left:-10%;width:60%;height:60%;background:rgba(0,113,227,0.03);filter:blur(150px);border-radius:50%;pointer-events:none;"></div>
    <div style="position:absolute;bottom:-20%;right:-10%;width:60%;height:60%;background:rgba(0,113,227,0.03);filter:blur(150px);border-radius:50%;pointer-events:none;"></div>"""

# ═════════════════════════════════════════════════════════════════════════════
# SLIDES
# ═════════════════════════════════════════════════════════════════════════════

def s01():
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="center">
        <div class="label" style="margin-bottom: 40px;">A I &nbsp; T R A N S F O R M A T I O N &nbsp; A D V I S O R Y</div>
        <h1 class="hero" style="max-width: 1200px;">
          От Human-Centric<br>к <span class="accent">AI-Native</span>
        </h1>
        <p class="sub" style="margin-top: 32px; text-align: center;">
          Проектируем и внедряем автономные AI-системы<br>для корпоративных процессов нового поколения
        </p>
      </div>
    </div>"""


def s02():
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="split" style="flex: 1; align-items: center;">
        <div style="position: relative; z-index: 1;">
          <h2 class="big">Почему AI<br>не работает?</h2>
          <p class="body" style="margin-top: 24px; max-width: 500px;">
            Большинство компаний пытаются «приклеить» AI к старым процессам. Это создаёт иллюзию прогресса, но не даёт результата.
          </p>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px;">
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div class="dot"></div>
              <p style="font-size: 18px; font-weight: 500;">Процессы оптимизированы под ручной ввод</p>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div class="dot"></div>
              <p style="font-size: 18px; font-weight: 500;">Данные разрознены и не пригодны для обучения</p>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div class="dot"></div>
              <p style="font-size: 18px; font-weight: 500;">Культура сопротивляется изменениям</p>
            </div>
          </div>
        </div>
        <div class="glass" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; min-height: 440px; position: relative; z-index: 1;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: rgba(0,113,227,0.15); border-radius: 40px 40px 0 0;"></div>
          <div class="display" style="font-size: 140px; font-weight: 700; letter-spacing: -0.05em; line-height: 1;">85%</div>
          <p class="label" style="margin-top: 12px;">Failure Rate</p>
          <p style="font-size: 14px; color: {GRAY}; margin-top: 16px; font-weight: 500;">в традиционных организациях</p>
        </div>
      </div>
      {pn(2)}
    </div>"""


def s03():
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div style="text-align: center; margin-bottom: 48px; position: relative; z-index: 1;">
        <h2 class="big">Эволюция структуры</h2>
        <p class="sub" style="margin: 16px auto 0; text-align: center;">Переход от ручного управления к автономным системам</p>
      </div>
      <div class="g2" style="flex: 1; align-content: center; position: relative; z-index: 1;">
        <div style="padding: 48px; border-radius: 40px; background: rgba(245,245,247,0.5); border: 1px solid {GRAY_L}; text-align: left;">
          <h3 class="display" style="font-size: 36px; font-weight: 700; color: {GRAY}; margin-bottom: 20px;">Human-Centric</h3>
          <p style="font-size: 18px; color: {GRAY}; line-height: 1.7; margin-bottom: 32px;">
            Человек в центре, делает работу вручную. AI — лишь вспомогательный инструмент. Скорость ограничена биологией.
          </p>
          <div class="bar"><div class="bar-fill bar-gray" style="width: 25%;"></div></div>
          <p style="font-size: 11px; font-weight: 700; color: {GRAY}; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 10px;">Efficiency: 25%</p>
        </div>
        <div class="glass" style="text-align: left; border: 1px solid rgba(0,113,227,0.15);">
          <h3 class="display" style="font-size: 36px; font-weight: 700; color: {ACCENT}; margin-bottom: 20px;">AI-Native</h3>
          <p style="font-size: 18px; color: {BLACK}; line-height: 1.7; margin-bottom: 32px;">
            Процессы спроектированы под алгоритмы. AI выполняет 90% операций автономно. Человек — архитектор и дирижёр.
          </p>
          <div class="bar" style="background: {GRAY_L};"><div class="bar-fill bar-accent" style="width: 95%;"></div></div>
          <p style="font-size: 11px; font-weight: 700; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.2em; margin-top: 10px;">Efficiency: 95%</p>
        </div>
      </div>
      {pn(3)}
    </div>"""


def s04():
    features = [
        ("24/7 Автономия", "Без перерывов и выходных"),
        ("Real-time Реакция", "Ответ за миллисекунды"),
        ("Zero Error Rate", "Исключение человеческого фактора"),
        ("Infinite Scalability", "Рост без найма персонала"),
    ]
    cards = ""
    for title, desc in features:
        cards += f"""
        <div class="glass-sm" style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 20px; min-height: 240px; justify-content: center;">
          <div style="width: 48px; height: 48px; border-radius: 16px; background: rgba(0,113,227,0.05); display: flex; align-items: center; justify-content: center;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: {ACCENT};"></div>
          </div>
          <div>
            <p style="font-weight: 700; font-size: 20px; letter-spacing: -0.02em;">{title}</p>
            <p style="font-size: 14px; color: {GRAY}; margin-top: 6px; font-weight: 500;">{desc}</p>
          </div>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div style="text-align: center; margin-bottom: 48px; position: relative; z-index: 1;">
        <h2 class="big">Цифровые сотрудники</h2>
        <p class="sub" style="margin: 16px auto 0; text-align: center;">Автономные сущности для выполнения бизнес-задач</p>
      </div>
      <div class="g4" style="position: relative; z-index: 1;">{cards}</div>
      {pn(4)}
    </div>"""


def s05():
    agents = [
        ("Агент-разведчик", "Мгновенный анализ и структурирование данных"),
        ("Агент-контролер", "Проверка на соответствие политикам и рискам"),
        ("Агент-оркестратор", "Координация и финальная сборка результата"),
    ]
    items = ""
    for title, desc in agents:
        items += f"""
        <div style="display: flex; gap: 20px; align-items: flex-start; padding: 24px; border-radius: 20px; transition: background 0.3s;">
          <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(0,113,227,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: {ACCENT};"></div>
          </div>
          <div>
            <p style="font-weight: 700; font-size: 18px; color: {BLACK};">{title}</p>
            <p style="font-size: 15px; color: {GRAY}; margin-top: 4px; font-weight: 500;">{desc}</p>
          </div>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="split" style="flex: 1; align-items: center;">
        <div style="position: relative; z-index: 1;">
          <h2 class="big">Цифровой<br>оркестр</h2>
          <p class="body" style="margin-top: 20px; max-width: 480px;">
            Мультиагентные системы — сеть специализированных AI-агентов для решения комплексных задач.
          </p>
          <div style="margin-top: 28px;">{items}</div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 1;">
          <div style="position: absolute; width: 120%; height: 120%; background: rgba(0,113,227,0.04); filter: blur(120px); border-radius: 50%;"></div>
          <div class="glass" style="border-radius: 50%; width: 320px; height: 320px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(0,113,227,0.1); position: relative;">
            <div class="display" style="font-size: 28px; font-weight: 700; color: {ACCENT}; text-align: center;">Multi-Agent<br>System</div>
          </div>
          <div style="position: absolute; width: 420px; height: 420px; border: 1px solid rgba(0,113,227,0.08); border-radius: 50%;"></div>
          <div style="position: absolute; width: 340px; height: 340px; border: 1px solid rgba(0,113,227,0.04); border-radius: 50%;"></div>
        </div>
      </div>
      {pn(5)}
    </div>"""


def s06():
    stats = [
        ("Сокращение OPEX", "25-40%", "Операционные затраты"),
        ("Высвобождение FTE", "15-50", "Сотрудников на отдел"),
        ("ROI за 3 года", "3.5x+", "Возврат инвестиций"),
    ]
    cards = ""
    for label, value, sub_text in stats:
        cards += f"""
        <div class="glass" style="text-align: center; display: flex; flex-direction: column; gap: 20px; justify-content: center; min-height: 340px; border: 1px solid rgba(0,113,227,0.05);">
          <p class="label">{label}</p>
          <p class="display" style="font-size: 84px; font-weight: 700; letter-spacing: -0.04em; line-height: 1;">{value}</p>
          <p style="font-size: 16px; color: {GRAY}; font-weight: 500;">{sub_text}</p>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div style="text-align: center; margin-bottom: 48px; position: relative; z-index: 1;">
        <h2 class="big">Твёрдые цифры</h2>
        <p class="sub" style="margin: 16px auto 0; text-align: center;">Измеримый эффект от внедрения AI-Native архитектуры</p>
      </div>
      <div class="g3" style="position: relative; z-index: 1;">{cards}</div>
      {pn(6)}
    </div>"""


def case_slide(n, title, pain, solution, result_text, roi):
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="split" style="flex: 1; align-items: center;">
        <div style="position: relative; z-index: 1;">
          <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: 50px; background: rgba(0,113,227,0.1); margin-bottom: 24px;">
            <div style="width: 6px; height: 6px; border-radius: 50%; background: {ACCENT};"></div>
            <span style="font-size: 11px; font-weight: 700; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.4em;">Case Study</span>
          </div>
          <h2 class="title" style="margin-bottom: 32px;">{title}</h2>
          <div style="margin-bottom: 28px;">
            <p style="font-size: 10px; font-weight: 900; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 10px;">Проблема</p>
            <p style="font-size: 20px; color: {GRAY}; line-height: 1.7; font-weight: 300;">{pain}</p>
          </div>
          <div>
            <p style="font-size: 10px; font-weight: 900; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.4em; margin-bottom: 10px;">Решение</p>
            <p style="font-size: 20px; color: {BLACK}; line-height: 1.7;">{solution}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 28px; position: relative; z-index: 1;">
          <div style="position: absolute; top: -80px; right: -80px; width: 256px; height: 256px; background: rgba(0,113,227,0.04); filter: blur(100px); border-radius: 50%; pointer-events: none;"></div>
          <div class="glass" style="text-align: left; border: 1px solid rgba(0,113,227,0.1);">
            <p style="font-size: 10px; font-weight: 900; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 16px;">Результат</p>
            <p style="font-size: 28px; font-weight: 700; line-height: 1.4; letter-spacing: -0.02em;">{result_text}</p>
          </div>
          <div class="card-black" style="text-align: left;">
            <p style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.4em; opacity: 0.5; margin-bottom: 12px;">Эффективность (ROI)</p>
            <p class="display" style="font-size: 56px; font-weight: 700; letter-spacing: -0.04em;">{roi}</p>
          </div>
        </div>
      </div>
      {pn(n)}
    </div>"""


def s07():
    return case_slide(7,
        "Оптимизация контакт-центра",
        "Высокая текучка, низкий FCR (<70%), ручной контроль качества покрывает <5% звонков.",
        "Речевая аналитика и AI-классификация тематик в реальном времени. 100% аудит звонков.",
        "AHT −17%, NPS +15 пунктов, ошибки операторов снижены в 6 раз.",
        "PoC за 4-8 нед."
    )

def s08():
    return case_slide(8,
        "Управление дебиторской задолженностью",
        "Заморозка 25% оборотного капитала в просроченной ДЗ. DSO 60+ дней.",
        "ML-скоринг и каскадная автоматическая коммуникация с должниками.",
        "Снижение просрочки на 50%, высвобождение 600 млн ₽ капитала.",
        "4.0× за 12 мес."
    )

def s09():
    return case_slide(9,
        "Интеллектуальная обработка документов",
        "Ручная обработка 50К+ документов/мес. Очереди по 5 дней. 10% ошибок.",
        "OCR + NLP классификация и автоматическая маршрутизация в ERP. On-prem.",
        "Время обработки с 18 до 2 минут. Высвобождение 18 FTE.",
        "2.5×–3.5× за 18 мес."
    )

def s10():
    return case_slide(10,
        "Предиктивное обслуживание (PdM)",
        "Незапланированные простои стоят $260K/час. Перерасход на ТОиР 40%.",
        "IoT-мониторинг и Digital Twin для прогнозирования отказов.",
        "Простои −50%, затраты на ТОиР −30%, рост OEE на 15%.",
        "4×–5× за 18 мес."
    )


def s11():
    phases = [
        ("01", "AI-Assisted", "Быстрые победы. Автоматизация поиска и черновиков. Экономия 20-40% времени."),
        ("02", "AI-Driven", "Процессная автоматизация. AI выполняет работу, человек подтверждает."),
        ("03", "AI-Native", "Полная автономия. Агентные системы выполняют E2E процессы без участия людей."),
    ]
    cards = ""
    for num, title, desc in phases:
        cards += f"""
        <div class="glass" style="text-align: left; position: relative; overflow: hidden; min-height: 300px; border: 1px solid rgba(0,113,227,0.05);">
          <div style="position: absolute; top: -16px; right: -8px; font-size: 140px; font-weight: 900; color: rgba(0,113,227,0.04); line-height: 1; font-family: 'Space Grotesk';">{num}</div>
          <h3 class="display" style="font-size: 32px; font-weight: 700; margin-bottom: 20px; position: relative; z-index: 1;">{title}</h3>
          <p style="font-size: 18px; color: {GRAY}; line-height: 1.7; font-weight: 500; position: relative; z-index: 1;">{desc}</p>
          <div style="position: relative; z-index: 1; margin-top: 28px;">
            <div style="width: 48px; height: 4px; background: rgba(0,113,227,0.15); border-radius: 2px;"></div>
          </div>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div style="text-align: center; margin-bottom: 48px; position: relative; z-index: 1;">
        <h2 class="big">Дорожная карта</h2>
        <p class="sub" style="margin: 16px auto 0; text-align: center;">Путь к полной трансформации за 12 месяцев</p>
      </div>
      <div class="g3" style="position: relative; z-index: 1;">{cards}</div>
      {pn(11)}
    </div>"""


def s12():
    steps = [
        ("1", "Аудит", "3-4 нед.", "Диагностика процессов и данных"),
        ("2", "Стратегия", "4-6 нед.", "Целевая архитектура и ROI"),
        ("3", "Пилот", "8-12 нед.", "MVP на реальных данных"),
        ("4", "Scale-Up", "6-18 мес.", "Роллаут на всю компанию"),
    ]
    items = ""
    for num, title, time, desc in steps:
        items += f"""
        <div style="text-align: left;">
          <div style="width: 48px; height: 48px; border-radius: 16px; background: {WHITE}; border: 1px solid {GRAY_L}; display: flex; align-items: center; justify-content: center; font-weight: 700; color: {ACCENT}; font-family: 'Space Grotesk'; font-size: 18px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">{num}</div>
          <p class="display" style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">{title}</p>
          <p style="font-size: 12px; font-weight: 900; color: {ACCENT}; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 12px;">{time}</p>
          <p style="font-size: 15px; color: {GRAY}; font-weight: 500; line-height: 1.6;">{desc}</p>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div style="text-align: center; margin-bottom: 64px; position: relative; z-index: 1;">
        <h2 class="big">Таймлайн проекта</h2>
        <p class="sub" style="margin: 16px auto 0; text-align: center;">От первого аудита до масштабируемой системы</p>
      </div>
      <div style="position: relative; z-index: 1;">
        <div style="position: absolute; top: 24px; left: 0; right: 0; height: 1px; background: {GRAY_L};"></div>
        <div class="g4">{items}</div>
      </div>
      {pn(12)}
    </div>"""


def s13():
    items = [
        ("Полное соответствие 152-ФЗ", "Защита персональных данных"),
        ("On-premise развертывание", "Данные не покидают контур"),
        ("Интеграция с российскими LLM", "GigaChat, Qwen, YandexGPT"),
    ]
    cards = ""
    for title, desc in items:
        cards += f"""
        <div style="display: flex; align-items: center; gap: 24px; padding: 24px; border-radius: 24px; background: {WHITE}; border: 1px solid {GRAY_L};">
          <div style="width: 48px; height: 48px; border-radius: 16px; background: rgba(0,113,227,0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <div style="width: 16px; height: 16px; border-radius: 50%; background: {ACCENT}; opacity: 0.6;"></div>
          </div>
          <div>
            <p style="font-weight: 700; font-size: 18px;">{title}</p>
            <p style="font-size: 14px; color: {GRAY}; margin-top: 2px;">{desc}</p>
          </div>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="split" style="flex: 1; align-items: center;">
        <div style="position: relative; z-index: 1;">
          <h2 class="big">Безопасность</h2>
          <p class="body" style="margin-top: 20px; max-width: 480px;">
            Проектируем системы с учётом строгих корпоративных стандартов и законодательства РФ.
          </p>
          <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px;">{cards}</div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 1;">
          <div style="position: absolute; inset: 0; background: rgba(0,113,227,0.04); filter: blur(120px); border-radius: 50%;"></div>
          <div class="glass" style="width: 320px; height: 320px; border-radius: 60px; display: flex; align-items: center; justify-content: center; transform: rotate(12deg); border: 1px solid rgba(0,113,227,0.1);">
            <div class="display" style="font-size: 48px; font-weight: 700; color: {ACCENT}; transform: rotate(-12deg);">Secure</div>
          </div>
          <div class="card-black" style="position: absolute; bottom: 60px; right: 40px; width: 100px; height: 100px; border-radius: 24px; display: flex; align-items: center; justify-content: center;">
            <div style="font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.15em; text-align: center; color: white;">152-ФЗ</div>
          </div>
        </div>
      </div>
      {pn(13)}
    </div>"""


def s14():
    cases_list = [
        ("Contact Center", "AHT −17%, NPS +15"),
        ("Document Processing", "Обработка −89%"),
        ("Корпоративная память", "Поиск −96%"),
        ("Управление ДЗ", "Просрочка −50%"),
        ("Ценообразование", "Маржа +3–7%"),
        ("CV-контроль", "Брак −50%"),
        ("Predictive Maintenance", "Простои −50%"),
        ("NL-to-SQL", "Отчёты: 2ч → 5мин"),
        ("Compliance", "Штрафы −70%"),
    ]
    rows = ""
    for name, result in cases_list:
        rows += f"""
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 20px 32px; border-bottom: 1px solid {GRAY_L};">
          <span style="font-size: 18px; font-weight: 600;">{name}</span>
          <span style="font-size: 18px; font-weight: 700; color: {ACCENT};">{result}</span>
        </div>"""
    return f"""
    <div class="s pad">
      {logo()}{tech_bg()}
      <div class="split" style="flex: 1; align-items: center;">
        <div style="position: relative; z-index: 1;">
          <h2 class="big">Портфель<br>кейсов</h2>
          <p class="body" style="margin-top: 20px; max-width: 420px;">
            9 реализованных проектов с верифицированными результатами
          </p>
        </div>
        <div style="background: {WHITE}; border-radius: 32px; border: 1px solid {GRAY_L}; overflow: hidden; position: relative; z-index: 1;">
          {rows}
        </div>
      </div>
      {pn(14)}
    </div>"""


def s15():
    return f"""
    <div class="s pad">
      {tech_bg()}
      <div class="center">
        <h1 class="hero" style="max-width: 1000px; margin-bottom: 24px;">
          Готовы стать<br><span class="accent" style="text-decoration: underline; text-decoration-color: rgba(0,113,227,0.2); text-underline-offset: 12px;">AI-Native?</span>
        </h1>
        <p class="sub" style="margin: 0 auto 48px; text-align: center;">
          Начните с пилотного проекта за 4-8 недель.<br>Докажите ценность на реальных цифрах.
        </p>
        <div style="display: inline-flex; align-items: center; gap: 24px; background: {BLACK}; color: {WHITE}; padding: 24px 56px; border-radius: 24px; font-size: 22px; font-weight: 700; font-family: 'Space Grotesk'; box-shadow: 0 20px 60px rgba(0,0,0,0.1);">
          Записаться на аудит &nbsp;&rarr;
        </div>
        <p style="margin-top: 80px; font-size: 12px; font-weight: 700; letter-spacing: 0.5em; text-transform: uppercase; color: {GRAY}; opacity: 0.4;">
          AI Transformation Advisory &bull; 2026
        </p>
      </div>
      {pn(15)}
    </div>"""


# ═════════════════════════════════════════════════════════════════════════════

def build_html():
    slides = [s01(),s02(),s03(),s04(),s05(),s06(),s07(),s08(),s09(),s10(),s11(),s12(),s13(),s14(),s15()]
    return f"<!DOCTYPE html><html lang=ru><head><meta charset=UTF-8><style>{CSS}</style></head><body>{''.join(slides)}</body></html>"

def main():
    html = build_html()
    out = os.path.join(os.path.dirname(__file__), "AI_Transformation_Advisory_2026.pdf")
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page()
        pg.set_content(html, wait_until="networkidle")
        pg.pdf(path=out, width="1920px", height="1080px", print_background=True, landscape=True)
        b.close()
    print(f"OK {out} ({os.path.getsize(out)/1048576:.1f} MB)")

if __name__ == "__main__":
    main()
