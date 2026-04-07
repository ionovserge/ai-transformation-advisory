/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap, TrendingDown, TrendingUp, ShieldCheck, Users, Clock, FileSearch, BrainCircuit,
  ChevronRight, AlertTriangle, CheckCircle2, BarChart3, ArrowRight, MessageSquare,
  Mail, Phone, Building2, FileText, AlertCircle, Search, PenTool, Shield, X,
  Presentation, Truck, ShieldAlert, Home, Menu, Coffee, ShoppingBag, Shirt
} from 'lucide-react';

// --- Shared Components (NEW DESIGN STYLING) ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-11 h-11 bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105 transition-all">AI</div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-black text-slate-900 tracking-tight text-lg uppercase">Transformation</span>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Advisory</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <a href="#problem" className="hover:text-blue-600 transition-colors">Проблема</a>
          <a href="#solutions-hub" className="hover:text-blue-600 transition-colors">Решения</a>
          <a href="#roadmap" className="hover:text-blue-600 transition-colors">Дорожная карта</a>
          <a href="#cases" className="hover:text-blue-600 transition-colors">Кейсы</a>
          <a href="#contact" className="bg-slate-900 text-white px-6 py-3 rounded-[14px] hover:bg-blue-600 transition-all shadow-sm active:scale-95">
            Связаться
          </a>
        </div>
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-6 shadow-xl"
          >
            <a href="#problem" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900">Проблема</a>
            <a href="#solutions-hub" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900">Решения</a>
            <a href="#cases" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900">Кейсы</a>
            <a href="#roadmap" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900">Дорожная карта</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-center">
              Связаться
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ChaosToOrder = () => {
  const chaosIcons = [FileText, Mail, MessageSquare, Clock, AlertCircle];
  const orderIcons = [Zap, TrendingUp, BarChart3, ShieldCheck];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FBFBFD] rounded-[40px] border border-slate-100 shadow-sm">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Chaos Flow */}
      <div className="absolute left-0 w-1/2 h-full pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const Icon = chaosIcons[i % chaosIcons.length];
          const startTop = Math.random() * 100;
          return (
            <motion.div
              key={`chaos-${i}`}
              initial={{ left: "-15%", top: `${startTop}%`, opacity: 0, scale: 0.4 }}
              animate={{
                left: "55%",
                top: "50%",
                opacity: [0, 1, 1, 0],
                scale: [0.4, 0.9, 0.9, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.8,
                times: [0, 0.1, 0.95, 1],
                ease: "linear"
              }}
              className="absolute p-3 bg-white/80 backdrop-blur-sm border border-red-500/20 rounded-xl text-red-400 shadow-sm z-10 -translate-y-1/2"
            >
              <Icon size={18} />
            </motion.div>
          );
        })}
      </div>

      {/* Central Brain */}
      <div className="relative z-20 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-56 h-56 border border-dashed border-blue-600/10 rounded-full" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-48 h-48 border border-blue-600/20 rounded-full bg-blue-50/30" />
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-36 h-36 rounded-full border border-blue-600/10 flex flex-col items-center justify-center relative bg-white shadow-[0_0_40px_rgba(37,99,235,0.08)]">
          <BrainCircuit size={54} className="text-blue-600 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          <div className="mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-blue-600/60">Processing</div>
        </motion.div>
      </div>

      {/* Order Flow */}
      <div className="absolute right-0 w-1/2 h-full pointer-events-none flex items-center">
        <div className="relative w-full h-0">
          {[...Array(5)].map((_, i) => {
            const Icon = orderIcons[i % orderIcons.length];
            return (
              <motion.div
                key={`order-${i}`}
                initial={{ left: "0%", opacity: 0, scale: 0.5 }}
                animate={{
                  left: ["0%", "120%"],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.9]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.8,
                  ease: "linear"
                }}
                className="absolute -translate-y-1/2"
                style={{ top: '0' }}
              >
                <div className="relative p-4 bg-white text-slate-900 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.06)] flex items-center gap-4 border border-blue-500/20 whitespace-nowrap">
                  <Icon size={18} className="shrink-0 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <CheckCircle2 size={12} />
                  </div>
                  <div className="w-12 h-0.5 bg-slate-50 rounded-full overflow-hidden">
                    <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-full h-full bg-blue-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LeadForm = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="relative bg-white border border-slate-100 p-8 md:p-12 rounded-[40px] shadow-sm">
      {submitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <CheckCircle2 size={48} className="text-blue-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка принята!</h3>
          <p className="text-slate-500 font-medium">Мы свяжемся с вами в течение 24 часов.</p>
        </motion.div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight text-left">{title}</h3>
          <p className="text-slate-500 mb-10 font-medium text-left">{subtitle}</p>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Имя</label>
              <input required type="text" placeholder="Иван Иванов" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Компания</label>
              <input required type="text" placeholder="Название компании" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email / Телефон</label>
              <input required type="text" placeholder="example@mail.ru" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
            </div>
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-[18px] font-bold text-base hover:bg-blue-600 transition-all shadow-sm mt-6 active:scale-[0.98] flex items-center justify-center gap-2 group">
            Получить консультацию
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-[10px] text-slate-400 text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      )}
    </div>
  );
};

const StatCard = ({ label, value, sub, icon: Icon, trend }: any) => (
  <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-center justify-between mb-8">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
        <Icon size={24} />
      </div>
      <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
        {trend === 'down' ? 'Снижение' : 'Рост'}
      </div>
    </div>
    <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tighter">{value}</div>
    <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{label}</div>
    <p className="text-sm text-slate-500 leading-relaxed font-medium">{sub}</p>
  </div>
);

const MaturityStep = ({ level, title, status, desc, current = false }: any) => (
  <div className={`p-8 rounded-[32px] border transition-all duration-500 text-left ${current ? 'bg-slate-900 border-slate-900 text-white shadow-xl scale-105 z-10' : 'bg-white border-slate-100 text-slate-900 opacity-60 grayscale'}`}>
    <div className="flex items-center gap-3 mb-6">
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-lg ${current ? 'bg-white/10 text-blue-400' : 'bg-slate-50 text-slate-400'}`}>{level}</span>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-lg ${current ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>{status}</span>
    </div>
    <h4 className="text-2xl font-bold mb-4 tracking-tight">{title}</h4>
    <p className={`text-sm leading-relaxed font-medium ${current ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
  </div>
);

// --- Full Data Arrays (ALL ORIGINAL CONTENT FROM App.tsx) ---

const cases = [
  { id: 'case-01', title: "AI-автоматизация обработки заказов для локальной кондитерской", stack: "TELEGRAM BOT | OPENAI | GOOGLE SHEETS", problem: "Небольшая кондитерская (3 точки) принимала заказы через WhatsApp и Telegram. Владелец тратил до 4 часов в день на уточнение начинок, дат и адресов. 15% заказов терялись или записывались с ошибками в Excel.", solution: [{ label: "Бот-ассистент", text: "Разработан Telegram-бот с LLM, который понимает свободную речь. Клиент пишет: \u00abХочу торт на субботу, 2кг, с клубникой\u00bb, бот сам уточняет детали и проверяет загрузку производства." }, { label: "Авто-учет", text: "Данные мгновенно попадают в Google Sheets и календарь пекаря. Бот сам выставляет счет через ЮKassa." }], results: [{ value: "0 мин", label: "Времени владельца на прием заказа" }, { value: "+25%", label: "Рост выручки за счет скорости ответов" }], icon: ShoppingBag, color: "bg-pink-500" },
  { id: 'case-02', title: "Умная система лояльности для сети кофеен", stack: "PYTHON | RFM-ANALYSIS | TELEGRAM", problem: "Сеть кофеен (5 точек) имела бумажные карточки \u00ab6-й кофе в подарок\u00bb. Владелец не знал своих клиентов, их предпочтения и частоту визитов. Возвращаемость (Retention) была низкой \u2014 около 30%.", solution: [{ label: "Цифровой профиль", text: "Запуск Telegram-карты лояльности. Система собирает историю покупок и предпочтения (любимый сироп, время визита)." }, { label: "AI-рассылки", text: "ML-алгоритм сегментирует базу и отправляет пуши: \u00abДавно не заходили, ваш любимый раф ждет вас со скидкой 20% только сегодня\u00bb." }], results: [{ value: "+45%", label: "Рост Retention (возвращаемости)" }, { value: "+18%", label: "Увеличение среднего чека" }], icon: Coffee, color: "bg-amber-700" },
  { id: 'case-03', title: "Оптимизация товарных остатков для магазина одежды", stack: "EXCEL AI | PROPHET | 1С", problem: "Магазин одежды часто сталкивался с ситуацией: ходовые размеры заканчивались (lost sales), а непопулярные модели пылились на складе месяцами, замораживая оборотные средства.", solution: [{ label: "Прогноз спроса", text: "ML-модель анализирует продажи прошлых периодов, сезонность и тренды, предсказывая необходимый объем закупа по каждой позиции." }, { label: "Авто-заказ", text: "Система формирует рекомендации для закупщика: что дозаказать, а на что сделать скидку для быстрой распродажи." }], results: [{ value: "\u221220%", label: "Снижение излишков на складе" }, { value: "+12%", label: "Рост выручки за счет наличия ходовых позиций" }], icon: Shirt, color: "bg-blue-500" },
  { id: 'case-04', title: "Предиктивное обслуживание оборудования на металлургическом комбинате", stack: "CATBOOST | IOT SENSORS | SCADA", problem: "Металлургический комбинат с парком из 1 200 единиц оборудования терял до 18% производственной мощности из-за незапланированных простоев. Обслуживание велось по регламенту (time-based): замена узлов через фиксированные интервалы \u2014 независимо от реального состояния. Годовой бюджет ТОиР составлял 1,4 млрд \u20bd.", solution: [{ label: "Мониторинг", text: "На критичное оборудование установлены вибро-, температурные и токовые датчики. Данные поступают в реальном времени через MQTT-шлюз. Для каждой единицы рассчитывается health score 0\u2013100." }, { label: "Прогноз", text: "ML-модели (CatBoost + LSTM) рассчитывают Remaining Useful Life и определяют оптимальное окно для ремонта с учётом производственного плана. Модель обучена на 3 годах исторических данных." }, { label: "Интеграция", text: "Система интегрирована с MES и CMMS (1С:ТОИР). При детекции аномалии автоматически формируется наряд-заказ с описанием через LLM и рекомендацией запчастей." }], results: [{ value: "\u221245%", label: "Снижение незапланированных простоев" }, { value: "280 млн \u20bd", label: "Экономия на ТОиР за первый год" }], icon: Building2, color: "bg-orange-600" },
  { id: 'case-05', title: "Динамическое ценообразование для федеральной торговой сети", stack: "LIGHTGBM | PRICE PARSING | 1С-ТОРГОВЛЯ", problem: "Торговая сеть (180 магазинов, 45 000 SKU) управляла ценами вручную через Excel. Категорийные менеджеры пересматривали прайс раз в 2\u20133 недели. Промо-акции планировались \u00abпо интуиции\u00bb \u2014 каждая третья давала ROI ниже нуля. Потери маржинальности \u2014 5\u20138% от оборота.", solution: [{ label: "Эластичность", text: "Для каждого SKU построена ML-модель ценовой эластичности спроса с учётом сезонности, дня недели, погоды и кросс-эластичности с товарами-заменителями." }, { label: "Конкуренты", text: "Ежедневный парсинг цен 12 конкурентов по 2 500 KVI-позициям. Система классифицирует движения (match / ignore / undercut) и корректирует ценовые индексы." }, { label: "Промо", text: "ML-прогноз uplift и ROI каждой механики (скидка, мультибай, кэшбек). Оптимизатор строит промо-календарь на квартал, исключая \u00abпромо-зависимые\u00bb SKU." }], results: [{ value: "+4,2%", label: "Рост валовой маржинальности за 6 месяцев" }, { value: "\u00d73", label: "Рост ROI промо-акций" }], icon: TrendingUp, color: "bg-blue-600" },
  { id: 'case-06', title: "AI-мониторинг охраны труда на строительной площадке", stack: "YOLOV8 | EDGE COMPUTING | RTSP", problem: "Крупный девелопер вёл 8 строительных площадок с общей численностью более 3 000 рабочих. Контроль СИЗ осуществлялся обходчиками 2\u20133 раза в день. Между обходами нарушения оставались незамеченными. За год \u2014 14 инцидентов с травмами, LTIFR в 4 раза выше бенчмарка.", solution: [{ label: "Детекция", text: "Развёрнута CV-система реального времени. 120+ камер подключены к edge-серверам с GPU. YOLOv8 детектирует: отсутствие каски, жилета, страховки; нахождение в запрещённых зонах. Точность >96%." }, { label: "Реакция", text: "При нарушении \u2014 мгновенный алерт прорабу в Telegram с фото и геолокацией камеры. Повторное нарушение \u2014 эскалация на инженера ОТ. Формируется акт с привязкой к подрядчику." }, { label: "Аналитика", text: "ML-модель предиктивного анализа инцидентов: на основе погоды, времени суток и типа работ прогнозирует зоны повышенного риска. Ежедневная \u00abкарта опасностей\u00bb." }], results: [{ value: "\u221268%", label: "Снижение LTIFR (частоты травм)" }, { value: "2 сек", label: "Среднее время от нарушения до алерта" }], icon: ShieldCheck, color: "bg-emerald-600" },
  { id: 'case-07', title: "Автоматическая проверка проектной документации на соответствие НПА", stack: "RAG | QDRANT | GIGACHAT", problem: "Проектный институт (600+ инженеров) ежегодно выпускал более 200 комплектов документации. Проверка на соответствие 2 000+ СНиП, СП и ГОСТ выполнялась нормоконтролёрами вручную \u2014 12 рабочих дней на проект. 35% замечаний госэкспертизы повторялись из проекта в проект.", solution: [{ label: "База НПА", text: "2 400 нормативных документов проиндексированы в Qdrant. Автоматическое обновление при публикации новых редакций через парсинг Консультант+." }, { label: "Проверка", text: "LLM анализирует пояснительные записки, извлекает параметры и сопоставляет с требованиями НПА. Каждое замечание содержит ссылку на конкретный пункт нормативного документа." }, { label: "Обучение", text: "Система накапливает историю замечаний госэкспертизы. ML ранжирует несоответствия по вероятности получения замечания, фокусируя нормоконтролёра на критичных пунктах." }], results: [{ value: "12\u21923 дня", label: "Сокращение цикла нормоконтроля проекта" }, { value: "\u221272%", label: "Снижение замечаний госэкспертизы" }], icon: FileText, color: "bg-slate-800" },
  { id: 'case-08', title: "ML-система управления дебиторской задолженностью дистрибьютора", stack: "CATBOOST | NEURALPROPHET | 1С:ERP", problem: "Федеральный дистрибьютор FMCG работал с 2 800 контрагентами. Просроченная ДЗ достигала 22% от общей (порядка 1,8 млрд \u20bd). Финансовая служба из 6 человек обзванивала должников вручную, начиная с крупнейших \u2014 мелкие годами оставались без внимания.", solution: [{ label: "Скоринг", text: "ML-модель оценивает вероятность просрочки до отгрузки (1С + СПАРК + арбитражные дела). Рекомендует кредитный лимит и условия оплаты." }, { label: "Каскад", text: "Автоматическая персонализированная коммуникация: за 3 дня \u2014 мягкое напоминание; день просрочки \u2014 формальное письмо; 7 дней \u2014 звонок; 30 дней \u2014 претензия. Тон адаптируется через LLM." }, { label: "Cash-flow", text: "NeuralProphet строит прогноз поступлений на 90 дней с точностью >90%, детектирует кассовые разрывы и рекомендует факторинг." }], results: [{ value: "\u221238%", label: "Снижение просроченной задолженности" }, { value: "420 млн \u20bd", label: "Высвобожденный оборотный капитал" }], icon: Zap, color: "bg-indigo-600" },
  { id: 'case-09', title: "AML-мониторинг нового поколения для регионального банка", stack: "GRAPH NEURAL NETWORK | LLM | 115-ФЗ", problem: "Банк из топ-50 использовал rule-based AML-систему: ~4 200 алертов/месяц, 96% ложноположительных. 15 аналитиков тратили по 40\u201350 минут на каждое расследование. Реальные схемы обнала проходили мимо \u2014 система не видела связей между контрагентами.", solution: [{ label: "Детекция", text: "Multi-model ensemble: gradient boosting для аномальных транзакций + Graph Neural Network для дропперских сетей. NLP-анализ назначений платежей для детекции structuring и layering." }, { label: "Расследование", text: "LLM формирует investigation report: контекст из 10+ источников, генерация отчёта в формате СПО для Росфинмониторинга." }, { label: "Continuous KYC", text: "Динамический risk rating пересчитывается каждые 6 часов. Санкционный скрининг (SDN, EU, Росфинмониторинг) автоматизирован." }], results: [{ value: "\u221274%", label: "Снижение ложных срабатываний" }, { value: "8 мин", label: "Время расследования вместо 45 минут" }], icon: ShieldAlert, color: "bg-red-800" },
  { id: 'case-10', title: "AI-ассистент для автогенерации коммерческих предложений в B2B", stack: "RAG | QWEN2.5 | AMOCRM", problem: "ИТ-интегратор с отделом продаж из 35 менеджеров обрабатывал ~400 запросов/месяц. Подготовка КП занимала 1,5\u20132 дня. До клиента КП доходило через 3\u20135 дней после контакта \u2014 30% уходили к конкурентам.", solution: [{ label: "Генерация КП", text: "LLM через RAG подбирает продукты из каталога, проверяет наличие и цены в ERP, формирует персонализированное КП с расчётом ROI для клиента." }, { label: "Персонализация", text: "Система анализирует сайт клиента, новости и отрасль, подбирает релевантные case studies и адаптирует аргументацию." }, { label: "Прогноз", text: "ML-модель оценивает вероятность закрытия сделки на основе профиля клиента, суммы и engagement-метрик. Pipeline forecast для VP Sales." }], results: [{ value: "30 мин", label: "Время подготовки КП вместо 2 дней" }, { value: "+28%", label: "Рост конверсии из запроса в сделку" }], icon: Presentation, color: "bg-purple-600" },
  { id: 'case-11', title: "AI-скрайб: автоматизация медицинской документации в сети клиник", stack: "SPEECH-TO-TEXT | NLP | МИС", problem: "Сеть из 12 клиник, 280 врачей. Каждый тратил 35\u201340% времени на заполнение ЭМК. Результат \u2014 6 пациентов в час вместо 9. Документация заполнялась \u00abпо памяти\u00bb после приёма с пропуском клинически значимых деталей.", solution: [{ label: "Распознавание", text: "Speech-to-text с медицинским словарём (дообучен на 5 000 часах записей). Speaker diarization для разделения ролей. Точность терминов 97%." }, { label: "Документация", text: "LLM извлекает жалобы, анамнез, осмотр, назначения и формирует протокол по МКБ-10. Генерирует выписки и рецепты в формате ЕГИСЗ." }, { label: "Drug check", text: "Проверка совместимости назначенных препаратов с текущей терапией. При обнаружении взаимодействия \u2014 алерт врачу до подписания." }], results: [{ value: "+40%", label: "Рост проходимости пациентов на врача" }, { value: "2 часа", label: "Высвобождено у врача ежедневно" }], icon: Users, color: "bg-cyan-600" },
  { id: 'case-12', title: "Оптимизация энергопотребления промышленного предприятия через RL", stack: "REINFORCEMENT LEARNING | АСКУЭ | DIGITAL TWIN", problem: "Химический завод с годовым энергопотреблением 6,2 млрд \u20bd. Операторы управляли режимами по регламентам 10-летней давности. Пиковые нагрузки приводили к штрафам. Удельное потребление на 18% выше отраслевого бенчмарка.", solution: [{ label: "Мониторинг", text: "Интеграция с АСКУЭ (5 000+ точек учёта). Real-time Sankey-диаграмма энергопотоков. Автоматическая детекция аномалий потребления." }, { label: "Оптимизация", text: "RL-агент управляет распределением нагрузки между агрегатами, минимизируя SEC при соблюдении плана. Peak shaving \u2014 сдвиг энергоёмких операций за пределы пиковых тарифов." }, { label: "Закупка", text: "ML-прогноз потребления + оптимизация закупки на оптовом рынке электроэнергии с учётом погоды и тарифной сетки." }], results: [{ value: "\u221214%", label: "Снижение удельного энергопотребления" }, { value: "870 млн \u20bd", label: "Годовая экономия на энергоресурсах" }], icon: Zap, color: "bg-emerald-700" },
  { id: 'case-13', title: "Цифровой муниципалитет: AI-обработка обращений граждан", stack: "NLP CLASSIFICATION | RAG | 59-ФЗ", problem: "Администрация города-миллионника: 18 000+ обращений/месяц. 23% направлялись в неправильный отдел. Среднее время ответа \u2014 22 дня при нормативе 30 по 59-ФЗ. Типовые вопросы (ЖКХ, благоустройство) \u2014 60% потока.", solution: [{ label: "Классификация", text: "NLP-модель классифицирует обращения по 42 категориям и маршрутизирует в нужный отдел. Точность маршрутизации \u2014 94%. Дублирующие обращения объединяются." }, { label: "Генерация ответов", text: "Для типовых обращений (60%) LLM через RAG генерирует проект ответа из базы постановлений и прецедентов. Оператор проверяет и отправляет." }, { label: "Контроль сроков", text: "Каскадные алерты по 59-ФЗ: за 7, 3 и 1 день до дедлайна. Автоматическая эскалация руководителю при просрочке." }], results: [{ value: "22\u21927 дней", label: "Среднее время ответа на обращение" }, { value: "0%", label: "Просроченных обращений (было 12%)" }], icon: Building2, color: "bg-blue-800" }
];

const solutions = [
  // Strategy
  {
    id: 'native',
    category: 'strategy',
    title: "AI-Native Transformation",
    subtitle: "Новая архитектура бизнеса",
    content: "Переход от Human-Centric процессов к AI-Native организации, где ИИ-агенты являются основными исполнителями.",
    icon: BrainCircuit,
    color: "bg-slate-900",
    details: ["Автономность 90%+", "Реакция в миллисекундах", "Нулевая стоимость транзакции"],
    industry: "Кросс-отраслевой",
    pain: "Традиционные компании не могут конкурировать по скорости и стоимости с AI-Native игроками. Процессы, завязанные на людях, масштабируются линейно и дорого.",
    kpis: ["Рост производительности в 10-50 раз", "Снижение стоимости транзакции на 90%", "Автономность процессов 90%+"],
    roi_detail: "10x+ на горизонте 3-5 лет. Полная перестройка экономики бизнеса и захват рынка.",
    stack: "Multi-Agent Orchestration, Autonomous Agents, Real-time Data Fabric, LLM-OS",
    agents: [
      { name: "Orchestrator", task: "Главный мозг, распределяющий задачи между специализированными агентами." },
      { name: "Quality Guard", task: "Агент, проверяющий корректность работы и compliance других агентов." },
      { name: "Learning Agent", task: "Постоянно дообучает систему на новых данных и обратной связи от пользователей." }
    ]
  },
  {
    id: 'mas',
    category: 'strategy',
    title: "Мультиагентные Системы",
    subtitle: "Цифровой оркестр специалистов",
    content: "Сеть специализированных агентов (Аналитик, Контролер, Юрист), координируемых Агентом-Оркестратором.",
    icon: Zap,
    category_label: 'MAS',
    color: "bg-blue-600",
    details: ["LLM (GigaChat/Qwen)", "RAG (Qdrant)", "Оркестрация LangGraph"],
    industry: "Кросс-отраслевой",
    pain: "Сложные задачи требуют участия разных специалистов. Обычные чат-боты не справляются с многоэтапными процессами.",
    kpis: ["Сокращение ошибок в сложных процессах на 80%", "Параллельное выполнение задач 24/7", "Масштабируемость без найма людей"],
    roi_detail: "4.0x за 12 месяцев. Замена дорогостоящих аутсорсинговых функций.",
    stack: "LangGraph, CrewAI, AutoGen, Vector DBs (Qdrant/Milvus), LangSmith",
    agents: [
      { name: "Researcher", task: "Глубокий поиск и анализ информации из внутренних и внешних источников." },
      { name: "Critic", task: "Проверка гипотез, поиск логических ошибок и верификация результатов." },
      { name: "Writer", task: "Формирование финальных отчетов, документов или кода в нужном стиле." },
      { name: "Workflow Manager", task: "Координация последовательности выполнения задач и управление состоянием." }
    ]
  },
  {
    id: 'transformation-office',
    category: 'strategy',
    title: "Transformation Office",
    subtitle: "Ускорение цифровизации",
    content: "Сокращение time-to-transformation в 2 раза. Повышение доли успешных AI-инициатив до 75%.",
    icon: TrendingUp,
    color: "bg-blue-700",
    details: ["Аудит AI-зрелости", "Генерация Roadmap", "Мониторинг Adoption Rate"],
    industry: "Кросс-отраслевой (управленческий консалтинг + технологическая платформа)",
    pain: "AI-трансформация занимает 18\u201336 месяцев, 70% инициатив не доходят до продакшна из-за отсутствия системного подхода.",
    kpis: ["Сокращение time-to-transformation с 24 до 12 месяцев", "Повышение доли успешных AI-инициатив до 75%", "Снижение сопротивления изменениям (Adoption Rate >80%)"],
    roi_detail: "5.0x за 24 месяца. Экономия 12+ месяцев потерянной ценности от AI.",
    stack: "LLM (GigaChat 2 / Qwen2.5 / Claude), RAG (база прецедентов), ML (process mining \u2014 Celonis/PM4Py)",
    agents: [
      { name: "Diagnostic", task: "Аудит AI-зрелости по 5 измерениям (Данные, Технологии, Процессы, Люди, Стратегия)." },
      { name: "Strategist", task: "Генерация AI-стратегии с финансовой моделью и 3-летним Roadmap." },
      { name: "PMO", task: "Цифровой проектный офис: мониторинг статусов, KPI, рисков и вероятности провала." },
      { name: "Change", task: "Управление изменениями: NLP-анализ коммуникаций, сегментация стейкхолдеров." }
    ]
  },
  {
    id: 'roi_total',
    category: 'strategy',
    title: "Экономический эффект",
    subtitle: "Математика победы",
    content: "Для компании с портфелем 50 млрд \u20bd \u2014 предотвращение штрафов на 500 млн \u20bd/год. ROI 3.0x\u20135.0x.",
    icon: BarChart3,
    color: "bg-green-600",
    details: ["Снижение OPEX 25-40%", "Высвобождение FTE 15-50", "Окупаемость от 5 месяцев"],
    industry: "Кросс-отраслевой",
    pain: "Неэффективное распределение ресурсов, скрытые потери в цепочках поставок, высокие операционные расходы.",
    kpis: ["Снижение OPEX на 25\u201340%", "Высвобождение 15\u201350 FTE", "Окупаемость инвестиций от 5 месяцев"],
    roi_detail: "3.0x\u20135.0x на горизонте 24 месяцев.",
    stack: "ROI-калькулятор, ML-прогнозирование, финансовое моделирование",
    agents: [
      { name: "Экономист-аналитик", task: "Расчёт NPV, IRR и срока окупаемости для каждой AI-инициативы." },
      { name: "Бенчмаркинг-агент", task: "Сопоставление показателей компании с отраслевыми лидерами и лучшими практиками." }
    ]
  },
  {
    id: 'supply-chain',
    category: 'industries',
    title: "Цепочки поставок",
    subtitle: "AI-логистика",
    content: "Оптимизация от прогнозирования спроса до логистики \u00abпоследней мили\u00bb.",
    icon: Truck,
    color: "bg-orange-700",
    details: ["Прогноз спроса", "Управление запасами", "VRP-оптимизация"],
    industry: "Ритейл, производство, дистрибьюция",
    pain: "Заморозка 20\u201335% оборотного капитала в запасах. Потери 3\u20136% выручки на out-of-stock.",
    kpis: ["Снижение запасов на 15\u201325%", "Out-of-stock <2%", "Точность прогноза 85%+"],
    roi_detail: "3.5x за 12 месяцев. Сокращение логистических затрат на 10\u201315%.",
    stack: "ML (probabilistic forecast), VRP-алгоритмы, GPS-трекинг, LLM",
    agents: [
      { name: "Прогнозист спроса", task: "Иерархические ML-модели с 50+ фичами (сезонность, погода, тренды)." },
      { name: "Менеджер запасов", task: "Расчёт заказов с constraints (MOQ, кратность), multi-echelon optimization." },
      { name: "Логист-оптимизатор", task: "VRP-оптимизация маршрутов, консолидация заказов, GPS-трекинг ETA." },
      { name: "Supply Chain Orchestrator", task: "End-to-end координация, exception handling, S&OP планирование." }
    ]
  },
  {
    id: 'roadmap',
    category: 'strategy',
    title: "Дорожная Карта",
    subtitle: "4 шага к AI-Native",
    content: "Диагностика (2-4 нед) \u2192 Стратегия (4-6 нед) \u2192 Пилот (8-12 нед) \u2192 Масштабирование (6-18 мес).",
    icon: Clock,
    color: "bg-blue-500",
    details: ["Без слома текущей IT", "Поэтапный запуск", "Обучение команды"],
    industry: "Кросс-отраслевой",
    pain: "Отсутствие четкого плана внедрения, риск выбора неверных технологий, сопротивление персонала.",
    kpis: ["Соблюдение сроков этапов 95%+", "Выход на окупаемость пилота <6 мес", "Adoption Rate >80%"],
    roi_detail: "Минимизация рисков провала AI-проектов (стоимость которых может достигать десятков млн \u20bd).",
    stack: "Методология AI-Transformation, Change Management Framework",
    agents: [
      { name: "Roadmap-агент", task: "Генерация детального плана внедрения с учетом специфики ИТ-ландшафта." },
      { name: "Риск-контролер", task: "Идентификация барьеров внедрения на каждом этапе и предложение мер по их устранению." }
    ]
  },
  // Business
  {
    id: 'portfolio',
    category: 'business',
    title: "Управление портфелем",
    subtitle: "Контроль контрактов",
    content: "Снижение бюджетных отклонений на 25\u201340%. Сокращение цикла согласования актов с 14 до 3 дней.",
    icon: FileSearch,
    color: "bg-slate-800",
    details: ["ML-прогноз отклонений", "Анализ отчетов через LLM", "Composite Risk Score"],
    industry: "Строительство, нефтегаз, металлургия, ритейл, ИТ-интеграторы",
    pain: "Крупные компании ведут сотни контрактов, теряя 3\u20138% бюджета на неконтролируемых перерасходах и штрафах.",
    kpis: ["Снижение бюджетных отклонений на 25\u201340%", "Сокращение цикла согласования актов с 14 до 3 дней", "Рост взыскания штрафных санкций на 60%"],
    roi_detail: "3.5x за 18 месяцев. Экономия 150\u2013400 млн \u20bd для портфеля 5 млрд \u20bd.",
    stack: "LLM (GigaChat 2 / Qwen2.5), RAG (Qdrant + LangChain), ML (CatBoost), OCR (Yandex Vision)",
    agents: [
      { name: "Портфельный аналитик", task: "Агрегация данных из ERP/ПМ, ML-прогноз отклонений (EVM), выявление рисков." },
      { name: "Бюджетный контроль", task: "Детекция аномалий в платежах (>5%), проверка счетов через RAG на соответствие контракту." },
      { name: "Штрафные санкции", task: "NLP-парсинг penalty-матриц, автогенерация претензионных писем." },
      { name: "Ресурсное планирование", task: "Моделирование сценариев \u00abчто если\u00bb, оптимизация распределения ресурсов." }
    ]
  },
  {
    id: 'cashflow',
    category: 'business',
    title: "Дебиторка и Cash-Flow",
    subtitle: "Финансовая устойчивость",
    content: "Снижение просроченной задолженности на 30\u201350%. Высвобождение до 600 млн \u20bd капитала.",
    icon: BarChart3,
    color: "bg-green-700",
    details: ["ML-скоринг дебиторов", "Авто-претензионная работа", "Детекция кассовых разрывов"],
    industry: "Дистрибьюция, оптовая торговля, телеком, лизинг, производство",
    pain: "До 15\u201325% оборотного капитала замораживается в просроченной ДЗ, ручная работа не позволяет охватить тысячи должников.",
    kpis: ["Снижение просроченной ДЗ на 30\u201350%", "Сокращение DSO на 15\u201325 дней", "Точность cash-flow прогноза 90%+"],
    roi_detail: "4.0x за 12 месяцев. Высвобождение 300\u2013600 млн \u20bd для ДЗ 2 млрд \u20bd.",
    stack: "LLM (GigaChat 2), ML (CatBoost, Prophet), Интеграции 1С/SAP, CRM (Bitrix24/amoCRM)",
    agents: [
      { name: "Кредитный скоринг", task: "ML-скоринг на основе внутренних и внешних данных (СПАРК, арбитраж)." },
      { name: "Мониторинг и коллекшн", task: "Классификация по aging buckets, персонализированная стратегия коммуникации через LLM." },
      { name: "Сверка и реконсиляция", task: "Автоматический matching \u00abсчёт \u2194 платёж \u2194 отгрузка \u2194 акт\u00bb." },
      { name: "Cash-flow прогнозирование", task: "ML-модель на горизонте 7/30/60/90 дней, детекция кассовых разрывов." }
    ]
  },
  {
    id: 'compliance',
    category: 'business',
    title: "Комплаенс и Аудит",
    subtitle: "Минимизация рисков",
    content: "100% покрытие нормативных изменений. Снижение штрафов на 70%. Сокращение трудозатрат на 40%.",
    icon: ShieldCheck,
    color: "bg-indigo-600",
    details: ["Парсинг НПА", "Антикоррупционный скрининг", "Real-time Heat Map"],
    industry: "Банки, страхование, фармацевтика, нефтегаз, госкорпорации",
    pain: "300+ значимых нормативных изменений в год для крупного холдинга. Штрафы до 5% оборота, риск отзыва лицензий.",
    kpis: ["100% покрытие регуляторных изменений", "Адаптация политик с 45 до 10 дней", "Снижение штрафов на 70%"],
    roi_detail: "3.0x за 18 месяцев. Предотвращение штрафов на 200\u2013500 млн \u20bd/год.",
    stack: "LLM, NLP, RAG (база политик + НПА), ML (Isolation Forest), Консультант+/Гарант API",
    agents: [
      { name: "Регуляторный мониторинг", task: "Непрерывный парсинг НПА, impact assessment через LLM, авто-создание задач." },
      { name: "Внутренний аудит", task: "Continuous auditing: транзакционный анализ, детекция дробления и аффилированности." },
      { name: "Антикоррупционный контроль", task: "Скрининг (SDN, EU, UN), проверка аффилированности, мониторинг \u00abкрасных флагов\u00bb." },
      { name: "ESG и охрана труда", task: "Интеграция с АСУ ТП, HR и EHS, ESG-отчётность GRI/SASB/TCFD." }
    ]
  },
  {
    id: 'memory',
    category: 'business',
    title: "Корпоративная Память",
    subtitle: "Система \u00abСупер-память\u00bb",
    content: "Превращение разрозненных документов в единый мозг компании. Поиск информации быстрее на 80%.",
    icon: Search,
    color: "bg-slate-700",
    details: ["Семантический поиск", "Автогенерация регламентов", "Онбординг-наставник"],
    industry: "Все компании от 100+ сотрудников",
    pain: "Сотрудники тратят 20\u201330% времени на поиск информации. При увольнении экспертов компания теряет знания.",
    kpis: ["Сокращение времени поиска на 80%", "Сохранение 90% критических знаний", "Сокращение времени онбординга на 40%"],
    roi_detail: "2.5x за 12 месяцев. Экономия 15 000+ часов/год на поиске информации.",
    stack: "LLM, RAG (10 000+ документов), Vector Search, Knowledge Graph (Neo4j), NLP",
    agents: [
      { name: "Семантический поиск", task: "Естественно-языковой запрос к 10 000+ документам всех форматов (docx, pdf, xlsx, email)." },
      { name: "Аудит коммуникаций", task: "Анализ 100% переписки на compliance-риски и утечки конфиденциальной информации." },
      { name: "Генерация политик", task: "Авто-создание и обновление регламентов на основе лучших практик и НПА." },
      { name: "Извлечение экспертизы", task: "LLM-интервью с увольняющимися экспертами для формализации неявных знаний." }
    ]
  },
  {
    id: 'hr',
    category: 'business',
    title: "HR и Таланты",
    subtitle: "Управление капиталом",
    content: "Снижение time-to-hire на 60%. Сокращение текучки на 25%. Экономия 200+ часов HR в месяц.",
    icon: Users,
    color: "bg-pink-600",
    details: ["AI-скрининг резюме", "Прогноз риска увольнения", "Персональное обучение"],
    industry: "Все компании от 50+ сотрудников",
    pain: "40% времени HR \u2014 рутина. Текучка стоит компании 1\u20132 годовых оклада на одного ушедшего.",
    kpis: ["Снижение time-to-hire на 60%", "Снижение текучки на 25%", "Рост eNPS на 15 пунктов"],
    roi_detail: "3.2x за 18 месяцев. Экономия на рекрутерах и стоимости текучки.",
    stack: "LLM, ML (churn prediction), NLP (анализ резюме), CV (анализ видеоинтервью), RAG",
    agents: [
      { name: "Подбор (Scout)", task: "NLP-парсинг 15+ источников (hh.ru, LinkedIn), автоматический скрининг резюме." },
      { name: "Интервьюер", task: "Проведение первичных структурированных интервью (текст/голос) с оценкой soft skills." },
      { name: "Онбординг (Buddy)", task: "Персональный план адаптации 24/7, ответы на вопросы по базе знаний." },
      { name: "Удержание (Keeper)", task: "ML-прогноз риска увольнения по активности в системах и тональности переписки." }
    ]
  },
  {
    id: 'sales',
    category: 'business',
    title: "B2B Продажи",
    subtitle: "Revenue Operations",
    content: "Рост конверсии на 35%. Подготовка КП за 30 минут вместо 3 дней. ROI 4.5x.",
    icon: TrendingUp,
    color: "bg-emerald-600",
    details: ["Генерация лидов", "Авто-подготовка КП", "AI-ассистент"],
    industry: "ИТ, промышленность, сервисные компании, дистрибьюция",
    pain: "70% лидов умирает между маркетингом и продажами. КП готовятся 2\u20133 дня вместо 30 минут.",
    kpis: ["Рост conversion rate на 35%", "Сокращение цикла сделки на 40%", "Точность прогноза pipeline до 85%"],
    roi_detail: "4.5x за 12 месяцев. Рост выручки без роста штата продаж.",
    stack: "LLM, ML (ICP scoring), NLP (анализ звонков), RAG (база успешных сделок), CRM",
    agents: [
      { name: "Генерация лидов (Hunter)", task: "Скрапинг и обогащение данных о компаниях, формирование qualified lead list." },
      { name: "Подготовка КП (Preparer)", task: "Автогенерация КП из шаблонов + real-time данные из ERP, персонализация под клиента." },
      { name: "Переговорщик (Negotiator)", task: "Real-time assistance менеджеру при звонке, авто-формирование follow-up плана." },
      { name: "Прогнозирование (Forecaster)", task: "Predictive pipeline: ML-оценка вероятности закрытия каждой сделки." }
    ]
  },
  {
    id: 'marketing',
    category: 'business',
    title: "Маркетинг и Контент",
    subtitle: "AI-креатив и аналитика",
    content: "Снижение стоимости лида (CPL) на 30\u201350%. Генерация контента в 10 раз быстрее.",
    icon: Presentation,
    color: "bg-purple-600",
    details: ["AI-генерация контента", "Media Buying", "SEO-оптимизация"],
    industry: "Кросс-отраслевой",
    pain: "Высокая стоимость привлечения, выгорание креативных команд, сложность персонализации на масштабе.",
    kpis: ["Снижение CPL на 30\u201350%", "Рост ROI маркетинговых кампаний на 40%", "Сокращение времени на production контента на 90%"],
    roi_detail: "4.5x за 12 месяцев. Экономия на агентствах и рост эффективности рекламы.",
    stack: "LLM (GPT-4o/Claude), Diffusion Models (Midjourney/Stable Diffusion), ML (LTV prediction)",
    agents: [
      { name: "Content Generator", task: "Создание текстов, постов, сценариев и баннеров под узкие сегменты аудитории." },
      { name: "Media Buyer", task: "Оптимизация ставок и бюджетов в реальном времени, A/B тестирование креативов." },
      { name: "SEO-агент", task: "Автоматическая оптимизация семантики, генерация мета-данных и перелинковка." },
      { name: "Аналитик трендов", task: "Мониторинг рынка и конкурентов для поиска новых углов атаки и инсайтов." }
    ]
  },
  {
    id: 'customer-service',
    category: 'business',
    title: "Клиентский сервис",
    subtitle: "AI-поддержка 24/7",
    content: "Автоматизация 70\u201390% запросов. Снижение времени ответа до 5 секунд. Рост CSAT на 20%.",
    icon: MessageSquare,
    color: "bg-cyan-700",
    details: ["AI-чатботы", "Triage запросов", "Анализ тональности"],
    industry: "Ритейл, банки, телеком, сервисные компании",
    pain: "Высокая стоимость колл-центра, долгое ожидание ответа, низкий CSAT из-за человеческого фактора.",
    kpis: ["Автоматизация (Deflection Rate) 70\u201390%", "Снижение стоимости обращения в 5\u201310 раз", "Рост CSAT на 20%"],
    roi_detail: "5.0x за 12 месяцев. Радикальное снижение затрат на поддержку при росте качества.",
    stack: "LLM, RAG (база знаний), Speech-to-Text / Text-to-Speech, Интеграция с Helpdesk",
    agents: [
      { name: "Support Agent", task: "Ответы на вопросы по базе знаний, решение простых тикетов, помощь в навигации." },
      { name: "Triage Agent", task: "Классификация и мгновенная маршрутизация сложных запросов на профильных экспертов." },
      { name: "Sentiment Analyst", task: "Мониторинг тональности в реальном времени и детекция негатива для эскалации." },
      { name: "Quality Control", task: "Автоматическая проверка 100% диалогов на соблюдение скриптов и вежливость." }
    ]
  },
  {
    id: 'legal',
    category: 'business',
    title: "Юридическая функция",
    subtitle: "AI-юрист",
    content: "Анализ 100-страничного договора за 2 минуты. Выявление 95% скрытых рисков. Ускорение в 3 раза.",
    icon: ShieldCheck,
    color: "bg-slate-600",
    details: ["Анализ договоров", "Risk Detection", "Template Generator"],
    industry: "Кросс-отраслевой",
    pain: "Юристы перегружены рутиной, риск пропуска критических условий в договорах, долгие циклы согласования.",
    kpis: ["Сокращение времени проверки договоров на 80%", "100% покрытие типовых рисков", "Ускорение согласования в 3 раза"],
    roi_detail: "3.5x за 18 месяцев. Снижение юридических рисков и ускорение бизнес-процессов.",
    stack: "LLM, RAG (база политик), NLP (entity extraction), Knowledge Graph",
    agents: [
      { name: "Contract Reviewer", task: "Анализ договоров на соответствие чек-листу и внутренним политикам компании." },
      { name: "Risk Detector", task: "Поиск \u00abподводных камней\u00bb, скрытых штрафов и невыгодных условий для компании." },
      { name: "Template Generator", task: "Авто-сборка сложных документов из конструктора на основе вводного ТЗ." },
      { name: "Litigation Assistant", task: "Поиск судебной практики и подготовка первичных правовых позиций." }
    ]
  },
  {
    id: 'it-dev',
    category: 'business',
    title: "ИТ и Разработка",
    subtitle: "AI-Native Development",
    content: "Ускорение разработки в 2-3 раза. Автоматическое покрытие тестами 90%+. Снижение техдолга.",
    icon: Zap,
    color: "bg-slate-900",
    details: ["Code Generation", "Auto-QA", "Legacy Migration"],
    industry: "Кросс-отраслевой",
    pain: "Дефицит разработчиков, высокая стоимость legacy-кода, медленный time-to-market и ошибки в архитектуре.",
    kpis: ["Ускорение разработки на 150%", "Снижение багов в продакшне на 40%", "Сокращение времени на документацию на 90%"],
    roi_detail: "3.0x за 12 месяцев. Сокращение затрат на поддержку и ускорение выпуска новых фич.",
    stack: "GitHub Copilot, Cursor, LLM (Claude 3.5 Sonnet), LangChain, Docker",
    agents: [
      { name: "Code Generator", task: "Написание кода по ТЗ, рефакторинг и миграция legacy-систем на современные стеки." },
      { name: "QA-агент", task: "Автогенерация и запуск тестов, поиск уязвимостей и дефектов логики." },
      { name: "DevOps-агент", task: "Оптимизация CI/CD пайплайнов, мониторинг инфраструктуры и авто-скейлинг." },
      { name: "Doc-агент", task: "Поддержание актуальности технической документации и API-спецификаций." }
    ]
  },
  // Industries
  {
    id: 'retail',
    category: 'industries',
    title: "Ритейл и Торговля",
    subtitle: "Динамическое управление",
    content: "Рост валовой маржи на 3\u20137%. Снижение out-of-stock на 25\u201340%. Оптимизация логистики.",
    icon: Building2,
    color: "bg-orange-600",
    details: ["Эластичность спроса", "Визуальный мерчандайзинг", "360\u00b0 портрет покупателя"],
    industry: "Торговые сети, e-commerce",
    pain: "Управление 10 000\u2013500 000 SKU, потеря до 5\u201312% маржи из-за неоптимальных цен и промо.",
    kpis: ["Рост валовой маржи на 3\u20137%", "Снижение out-of-stock на 25\u201340%", "Снижение dead stock на 30%"],
    roi_detail: "4.0x за 12 месяцев. Рост маржи на 1.5\u20133.5 млрд \u20bd для сети с оборотом 50 млрд \u20bd.",
    stack: "LLM, ML (LightGBM \u2014 эластичность, Prophet \u2014 прогнозирование), RAG, CV",
    agents: [
      { name: "Ценовой аналитик", task: "ML-модели ценовой эластичности по каждому SKU, расчёт оптимальной цены." },
      { name: "Конкурентный мониторинг", task: "Парсинг цен конкурентов, кластеризация, рекомендации (match / ignore / undercut)." },
      { name: "Ассортиментное управление", task: "ML-кластеризация ролей SKU (traffic builder / margin maker), market gap analysis." },
      { name: "Визуальный мерчандайзинг", task: "CV-анализ выкладки товара на полках, детекция пустых полок и нарушений." }
    ]
  },
  {
    id: 'manufacturing',
    category: 'industries',
    title: "Производство",
    subtitle: "Индустрия 4.0",
    content: "Снижение простоев на 40\u201360%. Сокращение брака на 30\u201350%. Предиктивное обслуживание.",
    icon: Zap,
    color: "bg-slate-900",
    details: ["IoT-мониторинг", "Цифровые двойники", "Оптимизация планирования"],
    industry: "Тяжелая промышленность, машиностроение, FMCG-производство",
    pain: "Незапланированные простои \u2014 5\u201320% потерь выручки. Брак \u2014 3\u20138% выручки.",
    kpis: ["Снижение простоев на 40\u201360%", "Сокращение брака на 30\u201350%", "Рост OEE на 10\u201315%"],
    roi_detail: "4.5x за 18 месяцев. Экономия 200\u2013300 млн \u20bd для предприятия с ТОиР-бюджетом 1 млрд \u20bd.",
    stack: "IoT-сенсоры, ML (health score), Digital Twin, CV (YOLOv8), NLP",
    agents: [
      { name: "Мониторинг состояния", task: "IoT-сенсоры, ML-детекция аномалий, health score 0\u2013100 для каждой единицы оборудования." },
      { name: "Прогнозирование отказов", task: "Remaining Useful Life, оптимальное окно для ремонта, учёт производственного плана." },
      { name: "Визуальный контроль", task: "CV-инспекция (YOLOv8/RT-DETR), точность >98%, детекция брака в реальном времени." },
      { name: "Цифровой двойник", task: "Симуляция \u00abwhat-if\u00bb сценариев на виртуальной модели перед изменениями в производстве." }
    ]
  },
  {
    id: 'construction',
    category: 'industries',
    title: "Строительство",
    subtitle: "BIM и Безопасность",
    content: "Снижение перерасхода с 30% до 10%. 100% детекция нарушений СИЗ на площадке.",
    icon: PenTool,
    color: "bg-yellow-600",
    details: ["BIM-аудит коллизий", "Drone/CV мониторинг", "Анализ инцидентов"],
    industry: "Промышленное и гражданское строительство, девелопмент",
    pain: "Перерасход бюджета до 30%, задержки сроков, высокие риски травматизма на площадке.",
    kpis: ["Снижение перерасхода с 30% до 10%", "90% BIM-коллизий выявляется автоматически", "100% детекция нарушений СИЗ"],
    roi_detail: "3.5x за 18 месяцев. Значительное снижение страховых рисков и штрафов.",
    stack: "BIM, Drone/CV, ML (прогноз инцидентов), IoT, NLP (анализ актов)",
    agents: [
      { name: "BIM-аналитик", task: "Clash detection, нормоконтроль проектных решений через BIM." },
      { name: "Агент прогресса", task: "CV-мониторинг прогресса с drone/CV, сопоставление с графиком работ." },
      { name: "Контроль безопасности", task: "CV-мониторинг нарушений СИЗ, предиктивный анализ инцидентов, авто-инструктажи." },
      { name: "Сметный контроль", task: "Автоматическая проверка актов (КС-2/КС-3), детекция аномалий в объемах." }
    ]
  },
  {
    id: 'fintech',
    category: 'industries',
    title: "Финансовый сектор",
    subtitle: "Кредитный конвейер",
    content: "Решение по кредиту за 15 минут. Снижение False Positive в AML на 60\u201380%.",
    icon: Shield,
    color: "bg-blue-900",
    details: ["Graph ML фрод-детекция", "Robo-advisory", "Сетевой анализ связей"],
    industry: "Банки, МФО, финтех-стартапы",
    pain: "40\u201350% времени андеррайтеров \u2014 сбор данных. Высокий уровень False Positive в AML (95\u201398%).",
    kpis: ["Решение по кредиту за 15 мин", "Снижение False Positive в AML на 60\u201380%", "Approval rate +10\u201315%"],
    roi_detail: "4.2x за 12 месяцев. Снижение операционных расходов на 40%.",
    stack: "Ensemble ML, Graph ML, NLP, LLM-investigation report, GNN",
    agents: [
      { name: "Андеррайтер", task: "Сбор и верификация из 15+ источников, ensemble ML скоринг, SHAP-интерпретация." },
      { name: "Фрод-мониторинг", task: "Graph ML (fraud rings), детекция поведенческих паттернов и документного фрода." },
      { name: "AML-аналитик", task: "Сетевой анализ (GNN), детекция схем (structuring, layering), авто-расследования." },
      { name: "Robo-advisory", task: "Персональный финансовый советник: goal-based investing, ребалансировка портфеля." }
    ]
  },
  {
    id: 'healthcare',
    category: 'industries',
    title: "Healthcare и Фарма",
    subtitle: "Цифровая медицина",
    content: "Освобождение 2 часов/день у врача. Снижение ошибок в документации на 80%.",
    icon: CheckCircle2,
    color: "bg-cyan-600",
    details: ["Speech-to-text (Scribe)", "Диагностическая поддержка", "Оптимизация расписания"],
    industry: "Клиники, стационары, фармкомпании",
    pain: "Врачи тратят 40% времени на заполнение документации. 15% диагнозов \u2014 ошибки из-за усталости.",
    kpis: ["Освобождение 2 часов/день у врача", "Снижение ошибок в документации на 80%", "Рост проходимости на 30%"],
    roi_detail: "2.8x за 24 месяца. Оптимизация штата и рост выручки.",
    stack: "LLM, NLP (speech-to-text), Computer Vision (анализ МРТ/рентгена), ML (triaging)",
    agents: [
      { name: "Scribe", task: "Автоматическое заполнение ЭМК из разговора врача и пациента (speech-to-text + NLP)." },
      { name: "Triage", task: "Предварительная оценка симптомов через чат/голос, приоритизация очереди по urgency score." },
      { name: "Diagnostician", task: "Поддержка принятия решений: анализ результатов исследований, drug interaction checker." },
      { name: "Scheduler", task: "Оптимизация расписания врачей, минимизация окон, прогноз нагрузки по дням." }
    ]
  },
  {
    id: 'funds',
    category: 'industries',
    title: "Фонды и Инвестиции",
    subtitle: "Smart Capital",
    content: "Автоматизация deal flow, мониторинг портфельных компаний и LP-отношений.",
    icon: BarChart3,
    color: "bg-indigo-900",
    details: ["Скрининг сделок", "LP-отчетность", "Стресс-тестирование"],
    industry: "PE/VC фонды, семейные офисы, инвест-банки",
    pain: "60\u201370% времени аналитиков \u2014 рутина. Невидимые tail risks в портфеле. 30\u201340% времени партнеров на fundraising.",
    kpis: ["Deal flow coverage +200%", "Скрининг с 5 дней до 4 часов", "LP-отчётность -60% времени"],
    roi_detail: "3.0x за 18 месяцев. Предотвращение штрафов и рост hit rate на 20\u201330%.",
    stack: "LLM, RAG, ML (Isolation Forest), GAN-сценарии, GRC-платформы",
    agents: [
      { name: "Скрининг-агент", task: "Мониторинг источников, pre-screening, investment teaser (2000 \u2192 200 \u2192 50 deep dive)." },
      { name: "Due Diligence", task: "Автообработка data room (100\u2013500 документов), финансовый анализ, оценка DCF." },
      { name: "Риск-менеджер", task: "Real-time расчёт рыночных рисков, стресс-тестирование по GAN-сценариям." },
      { name: "LP-комплаенс", task: "Автоматизация LP-отчётности, персонализация fundraising, narrative commentary." }
    ]
  },
  {
    id: 'design-org',
    category: 'industries',
    title: "Проектные организации",
    subtitle: "AI-проектировщик",
    content: "Автоматическая проверка документации на соответствие 2000+ НПА и нормоконтроль.",
    icon: PenTool,
    color: "bg-slate-800",
    details: ["Проверка чертежей", "Управление ресурсами", "База знаний"],
    industry: "Проектные институты, архитектурные бюро",
    pain: "Замечания госэкспертизы (60\u201380%). Ошибки junior-специалистов (-50% знаний). Низкая утилизация ресурсов.",
    kpis: ["Экспертиза с 15 до 3 дней", "Нормоконтроль -70% времени", "Утилизация ресурсов 80\u201385%"],
    roi_detail: "2.5x за 12 месяцев. Сохранение 90% знаний и переиспользование 60% решений.",
    stack: "RAG по СНиП/СП/ГОСТ, Computer Vision (чертежи), LLM (анализ ТЗ), ML (прогноз трудоёмкости)",
    agents: [
      { name: "Эксперт-проверщик", task: "Проверка соответствия 2000+ НПА, анализ чертежей через CV, трекинг замечаний." },
      { name: "Ресурсный менеджер", task: "Прогнозирование трудоёмкости через ML, оптимизация загрузки специалистов." },
      { name: "AI-ассистент", task: "Извлечение знаний из legacy-документации, каталог типовых решений." },
      { name: "Оркестратор", task: "Межраздельная координация и управление изменениями в проекте." }
    ]
  },
  {
    id: 'industrial-safety',
    category: 'industries',
    title: "Промышленная безопасность",
    subtitle: "Zero Harm AI",
    content: "Энергоэффективность, экологический мониторинг и безопасность ОПО.",
    icon: Shield,
    color: "bg-emerald-900",
    details: ["Энергоаудит", "ESG-compliance", "Мониторинг ОПО"],
    industry: "Металлургия, химия, энергетика, добыча",
    pain: "Высокое удельное потребление энергии. Штрафы за экологию. Риски аварий на ОПО.",
    kpis: ["Снижение энергозатрат на 10\u201320%", "100% compliance КЭР", "Аварийность -50\u201370%"],
    roi_detail: "3.0x\u20134.0x за 18-24 месяца. Экономия до 1.2 млрд \u20bd/год на энергозатратах.",
    stack: "IoT, RL (оптимизация режимов), Digital Twin, NLP (анализ инцидентов), Computer Vision",
    agents: [
      { name: "Энерго-оптимизатор", task: "Real-time учёт, оптимизация режимов оборудования через RL, закупка на оптовом рынке." },
      { name: "Эко-мониторинг", task: "Непрерывный мониторинг выбросов, управление отходами, carbon accounting." },
      { name: "Безопасность ОПО", task: "Мониторинг техсостояния через IoT, моделирование аварийных сценариев (Digital Twin)." },
      { name: "ESG-оркестратор", task: "Интеграция метрик ESG, отчетность ISO 50001, M&V по ISO 50015." }
    ]
  },
  {
    id: 'govtech',
    category: 'industries',
    title: "GovTech и Город",
    subtitle: "Цифровой муниципалитет",
    content: "Автоматизация обработки обращений граждан и оптимизация городского хозяйства.",
    icon: Building2,
    color: "bg-blue-800",
    details: ["Обработка обращений", "Госзакупки", "Городское хозяйство"],
    industry: "Государственное и муниципальное управление",
    pain: "300+ часов на обработку сложного обращения. Госзакупки \u2014 40% времени на ТЗ. Сроки ответа 20\u201330 дней.",
    kpis: ["Время ответа -70%", "Подготовка ТЗ -50%", "Удовлетворенность граждан +25%"],
    roi_detail: "2.5x за 24 месяца. Высокий средний чек (50\u2013200 млн \u20bd на регион).",
    stack: "LLM, NLP (классификация), RAG (база НПА), OCR/CV, ML (оптимизация маршрутов)",
    agents: [
      { name: "Омбудсмен", task: "NLP-классификация обращений (ЖКХ, транспорт), генерация ответов из базы решений." },
      { name: "Госзакупки", task: "Проверка ТЗ на коррупционные риски, подбор поставщиков, формирование документации." },
      { name: "CityOps", task: "Обработка обращений по ЖКХ, маршрутизация бригад, контроль исполнения по фото (CV)." },
      { name: "Администратор", task: "Единый dashboard для главы администрации: satisfaction, сроки, бюджет." }
    ]
  },
  {
    id: 'proptech',
    category: 'industries',
    title: "Недвижимость и PropTech",
    subtitle: "AI-управление активами",
    content: "Автоматизация оценки, аренды и эксплуатации коммерческой недвижимости.",
    icon: Home,
    color: "bg-slate-900",
    details: ["Оценка активов", "Управление арендой", "Предиктивная эксплуатация"],
    industry: "Девелопмент, управление коммерческой и жилой недвижимостью",
    pain: "30% времени \u2014 рутина с арендаторами. Простои в аренде \u2014 15\u201320% потери дохода. Рост расходов на эксплуатацию.",
    kpis: ["Снижение vacancy rate на 25%", "Рост арендного дохода на 8\u201312%", "Time-to-lease -40%"],
    roi_detail: "3.0x за 18 месяцев. Снижение эксплуатационных расходов на 15%.",
    stack: "ML (AVM, demand forecasting), LLM (договоры), Computer Vision (туры), IoT (HVAC)",
    agents: [
      { name: "Valuer", task: "Автоматическая оценка на основе рыночных данных, локации и инфраструктуры." },
      { name: "Leasing", task: "Автоматическая коммуникация с арендаторами, скоринг потенциальных арендаторов." },
      { name: "Facility", task: "Предиктивное обслуживание инженерных систем (HVAC, лифты), оптимизация энергоэффективности." },
      { name: "Marketer", task: "LLM-генерация описаний, виртуальные туры из фото, автопубликация на площадках." }
    ]
  },
  {
    id: 'aml-fraud',
    category: 'industries',
    title: "AML и Фрод-мониторинг",
    subtitle: "Финансовая безопасность",
    content: "Снижение False Positive на 60\u201380%. Детекция сложных схем отмывания через Graph ML.",
    icon: ShieldAlert,
    color: "bg-red-900",
    details: ["Graph ML", "Сетевой анализ", "Авто-расследования"],
    industry: "Банки, финтех, платежные системы",
    pain: "95\u201398% срабатываний AML \u2014 ложные. Огромный штат аналитиков на ручную проверку.",
    kpis: ["False Positive -60\u201380%", "Скорость расследования +300%", "Точность детекции схем 90%+"],
    roi_detail: "4.0x за 12 месяцев. Снижение ФОТ комплаенс-отдела на 40%.",
    stack: "Graph Neural Networks (GNN), NLP, LLM, Isolation Forest",
    agents: [
      { name: "Сетевой аналитик", task: "Выявление скрытых связей и групп (fraud rings) через графовый анализ." },
      { name: "AML-следователь", task: "Сбор досье на клиента из 20+ источников, генерация narrative report для регулятора." },
      { name: "Детектор аномалий", task: "Real-time мониторинг транзакций на предмет нетипичного поведения." }
    ]
  },
  {
    id: 'quality-control',
    category: 'industries',
    title: "Контроль качества",
    subtitle: "Zero Defect",
    content: "CV-инспекция брака с точностью 99%+. Снижение рекламаций на 40\u201360%.",
    icon: Search,
    color: "bg-blue-950",
    details: ["CV-инспекция", "Traceability", "Анализ причин"],
    industry: "Машиностроение, электроника, пищевая пром.",
    pain: "Человеческий фактор при визуальном контроле. Высокая стоимость брака, доходящего до клиента.",
    kpis: ["Точность детекции брака 99%+", "Снижение рекламаций на 50%", "Скорость инспекции +500%"],
    roi_detail: "3.5x за 18 месяцев. Предотвращение репутационных и финансовых потерь.",
    stack: "Computer Vision (YOLOv8, RT-DETR), Edge AI, ML",
    agents: [
      { name: "Визуальный инспектор", task: "Потоковый анализ видео с камер, детекция дефектов в реальном времени." },
      { name: "Аналитик брака", task: "Корреляция дефектов с параметрами техпроцесса для выявления корневых причин." },
      { name: "Traceability-агент", task: "Сквозной трекинг каждой единицы продукции от сырья до склада." }
    ]
  },
  {
    id: 'production-planning',
    category: 'industries',
    title: "Планирование производства",
    subtitle: "AI-диспетчер",
    content: "Оптимизация производственных графиков с учетом 100+ ограничений в реальном времени.",
    icon: Zap,
    color: "bg-slate-800",
    details: ["APS-оптимизация", "Сценарное моделирование", "Синхронизация цехов"],
    industry: "Машиностроение, металлообработка, дискретное производство",
    pain: "Сложность перепланирования при сбоях. Низкая оборачиваемость НЗП. Несоблюдение сроков заказов.",
    kpis: ["Сокращение цикла производства на 20\u201330%", "Снижение НЗП на 25%", "Соблюдение сроков (OTIF) 98%+"],
    roi_detail: "4.0x за 12 месяцев. Рост пропускной способности без капвложений.",
    stack: "Constraint Programming, ML (lead time prediction), Genetic Algorithms",
    agents: [
      { name: "Диспетчер-планировщик", task: "Автоматическая генерация сменно-суточных заданий, оптимизация загрузки станков." },
      { name: "Синхронизатор", task: "Межцеховая координация, управление материальными потоками, детекция узких мест." },
      { name: "Прогнозист сроков", task: "ML-расчёт реальных сроков готовности заказа с учётом текущей загрузки." }
    ]
  }
];


// --- Main App ---

export default function App() {
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('strategy');

  const filteredSolutions = solutions.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FBFBFD] font-sans text-slate-900 selection:bg-blue-50 overflow-x-hidden">
      <Navbar />

      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-600 mb-8 uppercase tracking-widest">
              <Zap size={14} className="text-slate-900" />
              AI Transformation Advisory
            </div>
            <h1 className="text-5xl md:text-[80px] font-bold text-slate-900 mb-10 leading-[1.05] tracking-tighter text-left">
              От Human-Centric <br />
              к <span className="text-slate-400">AI-Native</span> организации.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-xl font-medium tracking-tight text-left">
              Переводим бизнес-процессы на автономные AI-системы. Быстро, измеримо, без слома инфраструктуры.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <a href="#contact" className="bg-slate-900 text-white px-10 py-5 rounded-[18px] font-bold text-sm hover:bg-blue-600 transition-all shadow-sm active:scale-95 text-center min-w-[240px]">Записаться на аудит</a>
              <a href="#cases" className="text-slate-900 font-bold text-sm flex items-center gap-2 group underline underline-offset-8 decoration-slate-200 hover:decoration-blue-600 transition-all text-left">Смотреть кейсы</a>
            </div>
          </motion.div>
          <div className="relative aspect-square md:aspect-video"><ChaosToOrder /></div>
        </div>
      </section>

      {/* 2. Maturity */}
      <section className="py-32 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Где находится ваш бизнес?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Большинство компаний застревают на первой стадии, инвестируя в AI, но не получая отдачи из-за старой архитектуры.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <MaturityStep level="Stage 01" title="Digital Aware" status="Текущая" desc="ИИ воспринимается как игрушка или угроза. Данные разрознены в Excel. Люди — ручные исполнители. ROI < 0.5x." />
            <MaturityStep level="Stage 02" title="AI Ready" status="Переходная" desc="ИИ используется как инструмент (Co-pilot). Есть централизованные данные. Люди — операторы ИИ. ROI 1.5–2.5x." />
            <MaturityStep level="Stage 03" title="AI Native" status="Целевая" current={true} desc="Процессы построены для ИИ с нуля. Автономные агенты делают 90% работы. Люди — стратеги и дирижеры. ROI 3.0–5.0x+." />
          </div>
        </div>
      </section>

      {/* 3. Problem */}
      <section id="problem" className="py-40 bg-[#FBFBFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="text-[120px] font-black text-slate-200/80 leading-none mb-6 tracking-tighter">85%</div>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Почему ИИ-инициативы <span className="text-blue-600/80">умирают?</span></h2>
              <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                85% корпоративных ИИ-проектов никогда не доходят до стадии производства. Проблема не в алгоритмах. Проблема в попытке встроить миллисекундные технологии в процессы, где решения принимаются неделями.
              </p>

              <div className="space-y-6 max-w-xl">
                <div className="flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-500/30 transition-all group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"><AlertTriangle size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Парадокс телеги</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Компании покупают двигатели от болидов F1, но ставят их в деревянные телеги ручного управления.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-blue-500/30 transition-all group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"><Clock size={28} /></div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Узкое место — физиология</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Скорость бизнеса ограничена тем, насколько быстро один уставший сотрудник может прочитать информацию с экрана.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Evolution Scale */}
            <div className="relative">
              <div className="bg-white p-12 rounded-[48px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="text-center mb-12">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Три стадии эволюции</div>
                  <div className="flex items-center justify-between relative px-4">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                    <div className="relative z-10 w-3 h-3 bg-slate-200 rounded-full" />
                    <div className="relative z-10 w-3 h-3 bg-slate-200 rounded-full" />
                    <div className="relative z-10 w-6 h-6 bg-slate-900 rounded-full ring-[6px] ring-slate-50 shadow-lg" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl opacity-40 grayscale transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-slate-900">1. Digital Aware</span>
                      <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 uppercase font-black tracking-widest">Текущая</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">ИИ = игрушка. Данные разрознены. Человек делает всё руками.</p>
                  </div>
                  <div className="p-6 rounded-3xl opacity-60 grayscale transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-slate-900">2. AI Ready</span>
                      <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500 uppercase font-black tracking-widest">Переходная</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">ИИ = инструмент (Co-pilot). Человек — оператор, утверждающий решения.</p>
                  </div>
                  <div className="p-8 bg-slate-900 rounded-[32px] text-white shadow-2xl scale-[1.02] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold">3. AI Native</span>
                        <span className="text-[9px] bg-blue-600 px-2 py-0.5 rounded-full text-white uppercase font-black tracking-widest">Целевая</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">Процессы автономны. Мультиагентные системы делают 90% работы. Человек — стратег и дирижер.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Approach (Our Difference) */}
      <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">Наше главное отличие</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                AI без понимания бизнеса — дорогая игрушка. Мы не просто IT-компания, мы бизнес-консультанты, которые сначала исправляют процессы, а потом внедряют интеллект.
              </p>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-[18px] flex items-center justify-center shrink-0 font-bold text-lg">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Аудит e2e процесса</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">Находим, где реально теряются время и деньги. Картируем цепочки создания ценности.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-[18px] flex items-center justify-center shrink-0 font-bold text-lg">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Исправление архитектуры</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">Устраняем операционные барьеры. Готовим данные (Data Lake, DQ &gt; 90%).</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-[18px] flex items-center justify-center shrink-0 font-bold text-lg">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Внедрение AI-Native</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">Запускаем автономных агентов с жесткими «бортиками» (Guardrails) для исключения галлюцинаций.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[48px] shadow-2xl">
                <div className="text-center mb-10">
                  <div className="text-6xl font-bold text-blue-400 mb-2 tracking-tighter">ROI 140%</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">за первый год внедрения</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div className="text-xs text-slate-400 font-medium">Месяц 1</div>
                    <div className="h-4 w-1 bg-blue-500/20 rounded-full" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs text-slate-400 font-medium">Месяц 3</div>
                    <div className="h-12 w-1 bg-blue-500/40 rounded-full" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs text-blue-400 font-bold">Месяц 5</div>
                    <div className="h-24 w-1 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
                  </div>
                  <div className="text-center pt-6">
                    <div className="text-sm font-bold text-white">Точка безубыточности</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mt-1">Окупаемость инвестиций</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Economics */}
      <section className="py-40 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Экономика AI-Native систем</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Реальные показатели из нашего каталога внедрений. ROI достигает 5.0x на горизонте 24 месяцев.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={TrendingDown} trend="down" label="Снижение бюджетных отклонений" value="25-40%" sub="За счет ML-прогнозирования (EVM) и автоматического выявления рисковых сигналов в отчетах." />
            <StatCard icon={TrendingUp} trend="up" label="Рост взыскания штрафов" value="+60%" sub="Агенты парсят контракты и автоматически генерируют претензионные письма с юридическим обоснованием." />
            <StatCard icon={Zap} trend="up" label="Ускорение процессов" value="в 4-5 раз" sub="Сокращение цикла согласования актов с 14 до 3 дней. Скрининг документов за 4 часа вместо 5 дней." />
          </div>
        </div>
      </section>

      {/* 6. Solutions Hub */}
      <section id="solutions-hub" className="py-40 bg-[#FBFBFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl text-left text-slate-900 group">
              <h2 className="text-5xl font-bold mb-6 tracking-tighter">Интерактивный хаб <span className="text-blue-600/80 group-hover:text-blue-700 transition-colors duration-500">AI-решений</span></h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Исследуйте полный спектр наших возможностей: от фундаментальной стратегии до глубоких отраслевых вертикалей.</p>
            </div>
            <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200">
              {[
                { id: 'strategy', label: 'Стратегия', icon: BrainCircuit },
                { id: 'business', label: 'Бизнес-функции', icon: Zap },
                { id: 'industries', label: 'Отрасли', icon: Building2 }
              ].map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}>
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSolutions.map(sol => (
                <motion.div key={sol.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={() => setSelectedSolution(sol)}
                  className="group p-10 bg-white rounded-[40px] border border-slate-200/60 hover:border-blue-600/30 hover:shadow-[0_32px_64px_-16px_rgba(37,99,235,0.12)] transition-all duration-500 cursor-pointer text-left flex flex-col h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/40 group-hover:to-indigo-50/40 transition-all duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-inner"><sol.icon size={28} strokeWidth={1.5} /></div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-blue-700 transition-colors text-left">{sol.title}</h3>
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6">{sol.subtitle || 'Solution Architecture'}</div>
                    <p className="text-sm text-slate-500 font-medium mb-10 line-clamp-3 flex-grow text-left leading-relaxed">{sol.content}</p>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-50 mt-auto">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sol.industry}</span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all"><ArrowRight size={16} /></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7. Roadmap */}
      <section id="roadmap" className="py-40 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Дорожная карта трансформации</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Невидимый экзоскелет, а не пересадка сердца. Мы не ломаем текущую IT-инфраструктуру.</p>
          </div>
          <div className="relative">
            <div className="absolute top-[48px] left-0 right-0 h-px bg-slate-100 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
              {[
                { step: "01", title: "Диагностика", time: "2-4 нед.", desc: "Поиск «бутылочных горлышек» и оценка готовности данных." },
                { step: "02", title: "Стратегия", time: "4-6 нед.", desc: "Создание целевой AI-архитектуры и финансовой модели (ROI)." },
                { step: "03", title: "Пилот", time: "8-12 нед.", desc: "Запуск первого ИИ-агента без слома текущей инфраструктуры." },
                { step: "04", title: "Масштабирование", time: "6-18 мес.", desc: "Перевод успешных решений на всю компанию. Переход к AI-Native." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="text-6xl font-light text-slate-200 mb-8 group-hover:text-blue-600/40 transition-colors duration-500 leading-none tracking-tighter">{item.step}</div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                  <div className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest mb-4">{item.time}</div>
                  <p className="text-sm text-slate-400 font-medium px-4 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Cases */}
      <section id="cases" className="py-40 bg-[#FBFBFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="text-left group">
              <h2 className="text-5xl font-bold mb-6 tracking-tighter text-slate-900">Реализованные <span className="text-blue-600/80 group-hover:text-blue-700 transition-colors duration-500">кейсы</span></h2>
              <p className="text-lg text-slate-500 font-medium max-w-3xl">AI-Native решения для различных отраслей: от тяжелой промышленности до GovTech. Реальный опыт внедрения и измеримые результаты.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map(c => (
              <motion.div key={c.id} onClick={() => setSelectedCase(c)} whileHover={{ y: -6 }}
                className="group bg-white rounded-[28px] border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden active:scale-[0.98]">
                {/* Color accent top */}
                <div className={`h-1.5 ${c.color}`} />
                <div className="p-7 flex flex-col flex-grow">
                  {/* Icon + stack */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center text-white`}>
                      <c.icon size={20} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest max-w-[60%] text-right leading-tight">{c.stack}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug tracking-tight">{c.title}</h3>
                  {/* Problem excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">{c.problem}</p>
                  {/* Results */}
                  <div className="flex gap-3 mb-5">
                    {c.results.map((r, i) => (
                      <div key={i} className="flex-1 bg-slate-50 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-slate-900 tracking-tight">{r.value}</div>
                        <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:gap-3 transition-all">
                    Подробнее <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Urgency */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-slate-100/30 select-none pointer-events-none hidden lg:block tracking-tighter">24</div>
          <div className="text-left z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 mb-12 uppercase tracking-[0.3em] border border-slate-100"><AlertTriangle size={14} /> Риск бездействия</div>
            <h2 className="text-6xl md:text-8xl font-bold text-slate-900 mb-12 tracking-tighter leading-[0.9]">У вас осталось <br /><span className="text-blue-600/40">24 месяца.</span></h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed max-w-xl text-left font-medium">Рынок не будет ждать. Компании на ручном управлении физически не смогут конкурировать с цифровыми оркестрами, чья себестоимость транзакции стремится к нулю.</p>
            <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 max-w-xl">
              <div className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Выбор очевиден:</div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Трансформация или необратимая потеря маржи. Экономика нового времени не прощает медлительности.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end z-10">
            <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }} className="w-80 h-80 border-2 border-slate-100 rounded-full flex flex-col items-center justify-center bg-white shadow-[0_40px_80px_-20px_rgba(37,99,235,0.08)] relative">
              <div className="absolute inset-4 border border-dashed border-blue-500/20 rounded-full animate-spin-slow" />
              <div className="text-9xl font-light text-slate-900 tracking-tighter relative z-10">24</div>
              <div className="text-[12px] font-black text-blue-600/40 uppercase tracking-[0.6em] mt-4 relative z-10">Months</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Contact */}
      <section id="contact" className="py-40 bg-[#FBFBFD] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="text-left">
            <h2 className="text-6xl font-bold mb-12 tracking-tighter leading-[0.9] text-slate-900 text-left">Станьте <br /><span className="text-slate-400">дирижером</span> <br />цифрового <br />оркестра.</h2>
            <p className="text-xl text-slate-500 mb-20 leading-relaxed font-medium">Перестаньте быть главным исполнителем рутины и тушителем пожаров. Отдайте хаос алгоритмам и сосредоточьтесь на стратегии. Ваш бизнес-болид готов к запуску.</p>
            <div className="space-y-10 text-left">
              <div className="flex items-center gap-8 group text-left cursor-pointer">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all text-left shadow-sm"><Mail size={24} /></div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Email</div>
                  <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-left tracking-tight">hello@ai-advisory.ru</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group text-left cursor-pointer">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all text-left shadow-sm"><Phone size={24} /></div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Телефон</div>
                  <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-left tracking-tight">+7 (495) 000-00-00</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group text-left cursor-pointer">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all text-left shadow-sm"><Building2 size={24} /></div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Офис</div>
                  <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-left tracking-tight">Москва Сити, Башня Федерация</div>
                </div>
              </div>
            </div>
          </div>
          <LeadForm title="Записаться на аудит" subtitle="Мы проанализируем ваши процессы и подготовим расчет ROI за 48 часов." />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center gap-4 opacity-40 grayscale group cursor-pointer hover:opacity-100 transition-all">
            <div className="w-12 h-12 bg-slate-900 rounded-[16px] flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">AI</div>
            <span className="font-bold text-slate-900 tracking-tighter text-xl uppercase">TRANSFORMATION</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
          <p className="text-slate-300 font-bold uppercase tracking-[0.5em] text-[9px]">© 2026 AI Transformation Advisory. Все права защищены.</p>
        </div>
      </footer>

      {/* Solutions Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-[150] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedSolution(null)} className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="relative w-full max-w-2xl bg-white rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200/60">

              {/* Icon Header */}
              <div className="relative shrink-0">
                <div className="bg-gradient-to-b from-blue-600 to-blue-700 px-8 pt-8 pb-14 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20">
                      <selectedSolution.icon size={28} />
                    </div>
                    <button onClick={() => setSelectedSolution(null)} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-all">
                      <X size={20} />
                    </button>
                  </div>
                </div>
                {/* Overlap card effect */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-white rounded-t-[24px]" />
              </div>

              {/* Body */}
              <div className="px-8 pb-8 overflow-y-auto flex-1 -mt-1">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">{selectedSolution.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-8">{selectedSolution.subtitle}</p>

                {/* Two-column meta grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Суть решения</div>
                    <p className="text-sm text-slate-700 leading-relaxed">{selectedSolution.content}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Целевые KPI</div>
                    <ul className="space-y-1.5">
                      {selectedSolution.kpis && selectedSolution.kpis.map((kpi: string, i: number) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-slate-400 mt-0.5">•</span>
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Отрасль</div>
                    <p className="text-sm text-slate-700">{selectedSolution.industry}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">ROI и экономика</div>
                    <p className="text-sm font-semibold text-blue-600 leading-relaxed">{selectedSolution.roi_detail}</p>
                  </div>
                  {selectedSolution.pain && (
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Бизнес-боль</div>
                      <p className="text-sm text-slate-700 leading-relaxed">{selectedSolution.pain}</p>
                    </div>
                  )}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Технологический стек</div>
                    <p className="text-sm text-slate-500 italic leading-relaxed">{selectedSolution.stack}</p>
                  </div>
                </div>

                {/* Agents section */}
                {selectedSolution.agents && (
                  <div className="border-t border-slate-100 pt-6">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Детализация по агентам</div>
                    <div className="space-y-3">
                      {selectedSolution.agents.map((agent: any, idx: number) => (
                        <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="font-bold text-sm text-slate-900 mb-1">{agent.name}</div>
                          <div className="text-sm text-slate-500 leading-relaxed">{agent.task}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-8 pb-8 pt-2 shrink-0">
                <button onClick={() => setSelectedSolution(null)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-base hover:bg-blue-600 transition-all active:scale-[0.98]">
                  Закрыть обзор
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[150] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCase(null)} className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="relative w-full max-w-2xl bg-white rounded-t-[32px] md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200/60">

              {/* Header with color accent */}
              <div className="relative shrink-0">
                <div className={`${selectedCase.color} px-8 pt-8 pb-14 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20">
                      <selectedCase.icon size={28} />
                    </div>
                    <button onClick={() => setSelectedCase(null)} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-all">
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-white rounded-t-[24px]" />
              </div>

              {/* Body */}
              <div className="px-8 pb-8 overflow-y-auto flex-1 -mt-1">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">{selectedCase.title}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">{selectedCase.stack}</p>

                {/* Problem */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Бизнес-проблема</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{selectedCase.problem}</p>
                </div>

                {/* Solution steps */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Техническое решение</div>
                  <div className="space-y-3">
                    {selectedCase.solution.map((step: any, i: number) => (
                      <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="font-bold text-sm text-slate-900 mb-1">{step.label}</div>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Результаты внедрения</div>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCase.results.map((r: any, i: number) => (
                      <div key={i} className="bg-slate-900 rounded-2xl p-5 text-center">
                        <div className="text-2xl font-bold text-white tracking-tight mb-1">{r.value}</div>
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="border-t border-slate-100 pt-5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Технологический стек</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.stack.split('|').map((s: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider">{s.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8 pt-2 shrink-0">
                <button onClick={() => setSelectedCase(null)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-base hover:bg-blue-600 transition-all active:scale-[0.98]">
                  Закрыть кейс
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

}




