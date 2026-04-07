import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, TrendingDown, TrendingUp, ShieldCheck, Users, Clock, FileSearch, BrainCircuit, 
  ChevronRight, AlertTriangle, CheckCircle2, BarChart3, ArrowRight, MessageSquare, 
  Mail, Phone, Building2, FileText, AlertCircle, Search, PenTool, Shield, X, 
  Presentation, Truck, ShieldAlert, Home, Menu, Coffee, ShoppingBag, Shirt, Factory
} from 'lucide-react';

// --- Shared Components (ORIGINAL STRUCTURE & LOGIC) ---

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
    </nav>
  );
};

const ChaosToOrder = () => {
  const chaosIcons = [FileText, Mail, MessageSquare, Clock, AlertCircle];
  const orderIcons = [Zap, TrendingUp, BarChart3, ShieldCheck];
  
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FBFBFD] rounded-[40px] border border-slate-100 shadow-sm">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* ВХОД: Широкое облако хаоса */}
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

      {/* ЦЕНТР: Неоновый мозг */}
      <div className="relative z-20 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-56 h-56 border border-dashed border-blue-600/10 rounded-full" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-48 h-48 border border-blue-600/20 rounded-full bg-blue-50/30" />
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-36 h-36 rounded-full border border-blue-600/10 flex flex-col items-center justify-center relative bg-white shadow-[0_0_40px_rgba(37,99,235,0.08)]">
          <BrainCircuit size={54} className="text-blue-600 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
          <div className="mt-2 text-[8px] font-black uppercase tracking-[0.3em] text-blue-600/60">Processing</div>
        </motion.div>
      </div>

      {/* ВЫХОД: Конвейер */}
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
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка принята</h3>
          <p className="text-slate-500 font-medium">Мы свяжемся с вами в течение 24 часов.</p>
        </motion.div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight text-left">{title}</h3>
          <p className="text-slate-500 mb-10 font-medium text-left">{subtitle}</p>
          <div className="space-y-4">
            <input required type="text" placeholder="Ваше имя" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
            <input required type="text" placeholder="Название компании" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
            <input required type="text" placeholder="Email или телефон" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[18px] focus:outline-none focus:border-blue-600/30 transition-all font-medium text-sm" />
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-[18px] font-bold text-base hover:bg-blue-600 transition-all shadow-sm mt-6 active:scale-[0.98]">
            Получить консультацию
          </button>
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
        {trend === 'up' ? 'Increase' : 'Decrease'}
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

// --- Full Data Arrays (RESTORED FROM APP.TX) ---

const cases = [
  { id: 'case-01', title: "AI-автоматизация обработки заказов для локальной кондитерской", stack: "TELEGRAM BOT | OPENAI | GOOGLE SHEETS", problem: "Небольшая кондитерская (3 точки) принимала заказы через WhatsApp и Telegram. Владелец тратил до 4 часов в день на уточнение начинок, дат и адресов. 15% заказов терялись или записывались с ошибками в Excel.", solution: [{ label: "Бот-ассистент", text: "Разработан Telegram-бот с LLM, который понимает свободную речь. Клиент пишет: «Хочу торт на субботу, 2кг, с клубникой», бот сам уточняет детали и проверяет загрузку производства." }, { label: "Авто-учет", text: "Данные мгновенно попадают в Google Sheets и календарь пекаря. Бот сам выставляет счет через ЮKassa." }], results: [{ value: "0 мин", label: "Времени владельца на прием заказа" }, { value: "+25%", label: "Рост выручки за счет скорости ответов" }], icon: ShoppingBag, color: "bg-pink-500" },
  { id: 'case-02', title: "Умная система лояльности для сети кофеен", stack: "PYTHON | RFM-ANALYSIS | TELEGRAM", problem: "Сеть кофеен (5 точек) имела бумажные карточки «6-й кофе в подарок». Владелец не знал своих клиентов, их предпочтения и частоту визитов. Возвращаемость (Retention) была низкой — около 30%.", solution: [{ label: "Цифровой профиль", text: "Запуск Telegram-карты лояльности. Система собирает историю покупок и предпочтения (любимый сироп, время визита)." }, { label: "AI-рассылки", text: "ML-алгоритм сегментирует базу и отправляет пуши: «Давно не заходили, ваш любимый раф ждет вас со скидкой 20% только сегодня»." }], results: [{ value: "+45%", label: "Рост Retention (возвращаемости)" }, { value: "+18%", label: "Увеличение среднего чека" }], icon: Coffee, color: "bg-amber-700" },
  { id: 'case-03', title: "Оптимизация товарных остатков для магазина одежды", stack: "EXCEL AI | PROPHET | 1С", problem: "Магазин одежды часто сталкивался с ситуацией: ходовые размеры заканчивались (lost sales), а непопулярные модели пылились на складе месяцами, замораживая оборотные средства.", solution: [{ label: "Прогноз спроса", text: "ML-модель анализирует продажи прошлых периодов, сезонность и тренды, предсказывая необходимый объем закупа по каждой позиции." }, { label: "Авто-заказ", text: "Система формирует рекомендации для закупщика: что дозаказать, а на что сделать скидку для быстрой распродажи." }], results: [{ value: "−20%", label: "Снижение излишков на складе" }, { value: "+12%", label: "Рост выручки за счет наличия ходовых позиций" }], icon: Shirt, color: "bg-blue-500" },
  { id: 'case-04', title: "Предиктивное обслуживание оборудования на металлургическом комбинате", stack: "CATBOOST | IOT SENSORS | SCADA", problem: "Металлургический комбинат с парком из 1 200 единиц оборудования терял до 18% производственной мощности из-за незапланированных простоев. Обслуживание велось по регламенту (time-based): замена узлов через фиксированные интервалы — независимо от реального состояния. Годовой бюджет ТОиР составлял 1,4 млрд ₽.", solution: [{ label: "Мониторинг", text: "На критичное оборудование установлены вибро-, температурные и токовые датчики. Данные поступают в реальном времени через MQTT-шлюз. Для каждой единицы рассчитывается health score 0–100." }, { label: "Прогноз", text: "ML-модели (CatBoost + LSTM) рассчитывают Remaining Useful Life и определяют оптимальное окно для ремонта с учётом производственного плана. Модель обучена на 3 годах исторических данных." }, { label: "Интеграция", text: "Система интегрирована с MES и CMMS (1С:ТОИР). При детекции аномалии автоматически формируется наряд-заказ с описанием через LLM и рекомендацией запчастей." }], results: [{ value: "−45%", label: "Снижение незапланированных простоев" }, { value: "280 млн ₽", label: "Экономия на ТОиР за первый год" }], icon: Building2, color: "bg-orange-600" },
  { id: 'case-05', title: "Динамическое ценообразование для федеральной торговой сети", stack: "LIGHTGBM | PRICE PARSING | 1С-ТОРГОВЛЯ", problem: "Торговая сеть (180 магазинов, 45 000 SKU) управляла ценами вручную через Excel. Категорийные менеджеры пересматривали прайс раз в 2–3 недели. Промо-акции планировались «по интуиции» — каждая третья давала ROI ниже нуля. Потери маржинальности — 5–8% от оборота.", solution: [{ label: "Эластичность", text: "Для каждого SKU построена ML-модель ценовой эластичности спроса с учётом сезонности, дня недели, погоды и кросс-эластичности с товарами-заменителями." }, { label: "Конкуренты", text: "Ежедневный парсинг цен 12 конкурентов по 2 500 KVI-позициям. Система классифицирует движения (match / ignore / undercut) и корректирует ценовые индексы." }, { label: "Промо", text: "ML-прогноз uplift и ROI каждой механики (скидка, мультибай, кэшбек). Оптимизатор строит промо-календарь на квартал, исключая «промо-зависимые» SKU." }], results: [{ value: "+4,2%", label: "Рост валовой маржинальности за 6 месяцев" }, { value: "×3", label: "Рост ROI промо-акций" }], icon: TrendingUp, color: "bg-blue-600" },
  { id: 'case-06', title: "AI-мониторинг охраны труда на строительной площадке", stack: "YOLOV8 | EDGE COMPUTING | RTSP", problem: "Крупный девелопер вёл 8 строительных площадок с общей численностью более 3 000 рабочих. Контроль СИЗ осуществлялся обходчиками 2–3 раза в день. Между обходами нарушения оставались незамеченными. За год — 14 инцидентов с травмами, LTIFR в 4 раза выше бенчмарка.", solution: [{ label: "Детекция", text: "Развёрнута CV-система реального времени. 120+ камер подключены к edge-серверам с GPU. YOLOv8 детектирует: отсутствие каски, жилета, страховки; нахождение в запрещённых зонах. Точность >96%." }, { label: "Реакция", text: "При нарушении — мгновенный алерт прорабу в Telegram с фото и геолокацией камеры. Повторное нарушение — эскалация на инженера ОТ. Формируется акт с привязкой к подрядчику." }, { label: "Аналитика", text: "ML-модель предиктивного анализа инцидентов: на основе погоды, времени суток и типа работ прогнозирует зоны повышенного риска. Ежедневная «карта опасностей»." }], results: [{ value: "−68%", label: "Снижение LTIFR (частоты травм)" }, { value: "2 сек", label: "Среднее время от нарушения до алерта" }], icon: ShieldCheck, color: "bg-emerald-600" },
  { id: 'case-07', title: "Автоматическая проверка проектной документации на соответствие НПА", stack: "RAG | QDRANT | GIGACHAT", problem: "Проектный институт (600+ инженеров) ежегодно выпускал более 200 комплектов документации. Проверка на соответствие 2 000+ СНиП, СП и ГОСТ выполнялась нормоконтролёрами вручную — 12 рабочих дней на проект. 35% замечаний госэкспертизы повторялись из проекта в проект.", solution: [{ label: "База НПА", text: "2 400 нормативных документов проиндексированы в Qdrant. Автоматическое обновление при публикации новых редакций через парсинг Консультант+." }, { label: "Проверка", text: "LLM анализирует пояснительные записки, извлекает параметры и сопоставляет с требованиями НПА. Каждое замечание содержит ссылку на конкретный пункт нормативного документа." }, { label: "Обучение", text: "Система накапливает историю замечаний госэкспертизы. ML ранжирует несоответствия по вероятности получения замечания, фокусируя нормоконтролёра на критичных пунктах." }], results: [{ value: "12→3 дня", label: "Сокращение цикла нормоконтроля проекта" }, { value: "−72%", label: "Снижение замечаний госэкспертизы" }], icon: FileText, color: "bg-slate-800" },
  { id: 'case-08', title: "ML-система управления дебиторской задолженностью дистрибьютора", stack: "CATBOOST | NEURALPROPHET | 1С:ERP", problem: "Федеральный дистрибьютор FMCG работал с 2 800 контрагентами. Просроченная ДЗ достигала 22% от общей (порядка 1,8 млрд ₽). Финансовая служба из 6 человек обзванивала должников вручную, начиная с крупнейших — мелкие годами оставались без внимания.", solution: [{ label: "Скоринг", text: "ML-модель оценивает вероятность просрочки до отгрузки (1С + СПАРК + арбитражные дела). Рекомендует кредитный лимит и условия оплаты." }, { label: "Каскад", text: "Автоматическая персонализированная коммуникация: за 3 дня — мягкое напоминание; день просрочки — формальное письмо; 7 дней — звонок; 30 дней — претензия. Тон адаптируется через LLM." }, { label: "Cash-flow", text: "NeuralProphet строит прогноз поступлений на 90 дней с точностью >90%, детектирует кассовые разрывы и рекомендует факторинг." }], results: [{ value: "−38%", label: "Снижение просроченной задолженности" }, { value: "420 млн ₽", label: "Высвобожденный оборотный капитал" }], icon: Zap, color: "bg-indigo-600" },
  { id: 'case-09', title: "AML-мониторинг нового поколения для регионального банка", stack: "GRAPH NEURAL NETWORK | LLM | 115-ФЗ", problem: "Банк из топ-50 использовал rule-based AML-систему: ~4 200 алертов/месяц, 96% ложноположительных. 15 аналитиков тратили по 40–50 минут на каждое расследование. Реальные схемы обнала проходили мимо — система не видела связей между контрагентами.", solution: [{ label: "Детекция", text: "Multi-model ensemble: gradient boosting для аномальных транзакций + Graph Neural Network для дропперских сетей. NLP-анализ назначений платежей для детекции structuring и layering." }, { label: "Расследование", text: "LLM формирует investigation report: контекст из 10+ источников, генерация отчёта в формате СПО для Росфинмониторинга." }, { label: "Continuous KYC", text: "Динамический risk rating пересчитывается каждые 6 часов. Санкционный скрининг (SDN, EU, Росфинмониторинг) автоматизирован." }], results: [{ value: "−74%", label: "Снижение ложных срабатываний" }, { value: "8 мин", label: "Время расследования вместо 45 минут" }], icon: ShieldAlert, color: "bg-red-800" },
  { id: 'case-10', title: "AI-ассистент для автогенерации коммерческих предложений в B2B", stack: "RAG | QWEN2.5 | AMOCRM", problem: "ИТ-интегратор с отделом продаж из 35 менеджеров обрабатывал ~400 запросов/месяц. Подготовка КП занимала 1,5–2 дня. До клиента КП доходило через 3–5 дней после контакта — 30% уходили к конкурентам.", solution: [{ label: "Генерация КП", text: "LLM через RAG подбирает продукты из каталога, проверяет наличие и цены в ERP, формирует персонализированное КП с расчётом ROI для клиента." }, { label: "Персонализация", text: "Система анализирует сайт клиента, новости и отрасль, подбирает релевантные case studies и адаптирует аргументацию." }, { label: "Прогноз", text: "ML-модель оценивает вероятность закрытия сделки на основе профиля клиента, суммы и engagement-метрик. Pipeline forecast для VP Sales." }], results: [{ value: "30 мин", label: "Время подготовки КП вместо 2 дней" }, { value: "+28%", label: "Рост конверсии из запроса в сделку" }], icon: Presentation, color: "bg-purple-600" },
  { id: 'case-11', title: "AI-скрайб: автоматизация медицинской документации в сети клиник", stack: "SPEECH-TO-TEXT | NLP | МИС", problem: "Сеть из 12 клиник, 280 врачей. Каждый тратил 35–40% времени на заполнение ЭМК. Результат — 6 пациентов в час вместо 9. Документация заполнялась «по памяти» после приёма с пропуском клинически значимых деталей.", solution: [{ label: "Распознавание", text: "Speech-to-text с медицинским словарём (дообучен на 5 000 часах записей). Speaker diarization для разделения ролей. Точность терминов 97%." }, { label: "Документация", text: "LLM извлекает жалобы, анамнез, осмотр, назначения и формирует протокол по МКБ-10. Генерирует выписки и рецепты в формате ЕГИСЗ." }, { label: "Drug check", text: "Проверка совместимости назначенных препаратов с текущей терапией. При обнаружении взаимодействия — алерт врачу до подписания." }], results: [{ value: "+40%", label: "Рост проходимости пациентов на врача" }, { value: "2 часа", label: "Высвобождено у врача ежедневно" }], icon: Users, color: "bg-cyan-600" },
  { id: 'case-12', title: "Оптимизация энергопотребления промышленного предприятия через RL", stack: "REINFORCEMENT LEARNING | АСКУЭ | DIGITAL TWIN", problem: "Химический завод с годовым энергопотреблением 6,2 млрд ₽. Операторы управляли режимами по регламентам 10-летней давности. Пиковые нагрузки приводили к штрафам. Удельное потребление на 18% выше отраслевого бенчмарка.", solution: [{ label: "Мониторинг", text: "Интеграция с АСКУЭ (5 000+ точек учёта). Real-time Sankey-диаграмма энергопотоков. Автоматическая детекция аномалий потребления." }, { label: "Оптимизация", text: "RL-агент управляет распределением нагрузки между агрегатами, минимизируя SEC при соблюдении плана. Peak shaving — сдвиг энергоёмких операций за пределы пиковых тарифов." }, { label: "Закупка", text: "ML-прогноз потребления + оптимизация закупки на оптовом рынке электроэнергии с учётом погоды и тарифной сетки." }], results: [{ value: "−14%", label: "Снижение удельного энергопотребления" }, { value: "870 млн ₽", label: "Годовая экономия на энергоресурсах" }], icon: Zap, color: "bg-emerald-700" },
  { id: 'case-13', title: "Цифровой муниципалитет: AI-обработка обращений граждан", stack: "NLP CLASSIFICATION | RAG | 59-ФЗ", problem: "Администрация города-миллионника: 18 000+ обращений/месяц. 23% направлялись в неправильный отдел. Среднее время ответа — 22 дня при нормативе 30 по 59-ФЗ. Типовые вопросы (ЖКХ, благоустройство) — 60% потока.", solution: [{ label: "Классификация", text: "NLP-модель классифицирует обращения по 42 категориям и маршрутизирует в нужный отдел. Точность маршрутизации — 94%. Дублирующие обращения объединяются." }, { label: "Генерация ответов", text: "Для типовых обращений (60%) LLM через RAG генерирует проект ответа из базы постановлений и прецедентов. Оператор проверяет и отправляет." }, { label: "Контроль сроков", text: "Каскадные алерты по 59-ФЗ: за 7, 3 и 1 день до дедлайна. Автоматическая эскалация руководителю при просрочке." }], results: [{ value: "22→7 дней", label: "Среднее время ответа на обращение" }, { value: "0%", label: "Просроченных обращений (было 12%)" }], icon: Building2, color: "bg-blue-800" }
];

const solutions = [
  { id: 'native', category: 'strategy', title: "AI-Native Transformation", subtitle: "Новая архитектура бизнеса", content: "Переход от Human-Centric процессов к AI-Native организации, где ИИ-агенты являются основными исполнителями.", icon: BrainCircuit, industry: "Кросс-отраслевой", pain: "Традиционные компании не могут конкурировать по скорости и стоимости с AI-Native игроками. Процессы, завязанные на людях, масштабируются линейно и дорого.", kpis: ["Рост производительности в 10-50 раз", "Снижение стоимости транзакции на 90%", "Автономность процессов 90%+"], stack: "Multi-Agent Orchestration, Autonomous Agents, Real-time Data Fabric, LLM-OS", roi_detail: "10x+ на горизонте 3-5 лет. Полная перестройка экономики бизнеса и захват рынка.", agents: [{ name: "Orchestrator", task: "Главный мозг, распределяющий задачи между специализированными агентами." }, { name: "Quality Guard", task: "Агент, проверяющий корректность работы и compliance других агентов." }, { name: "Learning Agent", task: "Постоянно дообучает систему на новых данных и обратной связи от пользователей." }] },
  { id: 'mas', category: 'strategy', title: "Мультиагентные Системы", subtitle: "Цифровой оркестр специалистов", content: "Сеть специализированных агентов (Аналитик, Контролер, Юрист), координируемых Агентом-Оркестратором.", icon: Zap, industry: "Кросс-отраслевой", pain: "Сложные задачи требуют участия разных специалистов. Обычные чат-боты не справляются с многоэтапными процессами.", kpis: ["Сокращение ошибок в сложных процессах на 80%", "Параллельное выполнение задач 24/7", "Масштабируемость без найма людей"], stack: "LangGraph, CrewAI, AutoGen, Vector DBs (Qdrant/Milvus), LangSmith", roi_detail: "4.0x за 12 месяцев. Замена дорогостоящих аутсорсинговых функций.", agents: [{ name: "Researcher", task: "Глубокий поиск и анализ информации из внутренних и внешних источников." }, { name: "Critic", task: "Проверка гипотез, поиск логических ошибок и верификация результатов." }, { name: "Writer", task: "Формирование финальных отчетов, документов или кода в нужном стиле." }, { name: "Workflow Manager", task: "Координация последовательности выполнения задач и управление состоянием." }] },
  { id: 'transformation-office', category: 'strategy', title: "Transformation Office", subtitle: "Ускорение цифровизации", content: "Сокращение time-to-transformation в 2 раза. Повышение доли успешных AI-инициатив до 75%.", icon: TrendingUp, industry: "Кросс-отраслевой", pain: "AI-трансформация занимает 18–36 месяцев, 70% инициатив не доходят до продакшна из-за отсутствия системного подхода.", kpis: ["Сокращение time-to-transformation с 24 до 12 месяцев", "Повышение доли успешных AI-инициатив до 75%", "Снижение сопротивления изменениям (Adoption Rate >80%)"], roi_detail: "5.0x за 24 месяца. Экономия 12+ месяцев потерянной ценности от AI.", stack: "LLM, RAG, ML (process mining)", agents: [{ name: "Diagnostic", task: "Аудит AI-зрелости по 5 измерениям (Данные, Технологии, Процессы, Люди, Стратегия)." }, { name: "Strategist", task: "Генерация AI-стратегии с финансовой моделью и 3-летним Roadmap." }, { name: "PMO", task: "Цифровой проектный офис: мониторинг статусов, KPI, рисков и вероятности провала." }, { name: "Change", task: "Управление изменениями: NLP-анализ коммуникаций, сегментация стейкхолдеров." }] },
  { id: 'roi_total', category: 'strategy', title: "Экономический эффект", subtitle: "Математика победы", content: "Для компании с портфелем 50 млрд ₽ — предотвращение штрафов на 500 млн ₽/год. ROI 3.0x–5.0x.", icon: BarChart3, industry: "Кросс-отраслевой", pain: "Неэффективное распределение ресурсов, скрытые потери в цепочках поставок, высокие операционные расходы.", kpis: ["Снижение OPEX на 25–40%", "Высвобождение 15–50 FTE", "Окупаемость инвестиций от 5 месяцев"], roi_detail: "3.0x–5.0x на горизонте 24 месяцев.", stack: "ROI-калькулятор, ML-прогнозирование, финансовое моделирование", agents: [{ name: "Экономист-аналитик", task: "Расчёт NPV, IRR и срока окупаемости для каждой AI-инициативы." }, { name: "Бенчмаркинг-агент", task: "Сопоставление показателей компании с отраслевыми лидерами и лучшими практиками." }] },
  { id: 'supply-chain', category: 'industries', title: "Цепочки поставок", subtitle: "AI-логистика", content: "Оптимизация от прогнозирования спроса до логистики «последней мили».", icon: Truck, industry: "Ритейл, производство, дистрибьюция", pain: "Заморозка 20–35% оборотного капитала в запасах. Потери 3–6% выручки на out-of-stock.", kpis: ["Снижение запасов на 15–25%", "Out-of-stock <2%", "Точность прогноза 85%+"], roi_detail: "3.5x за 12 месяцев. Сокращение логистических затрат на 10–15%.", stack: "ML, VRP-алгоритмы, GPS-трекинг, LLM", agents: [{ name: "Прогнозист спроса", task: "Иерархические ML-модели с 50+ фичами (сезонность, погода, тренды)." }, { name: "Менеджер запасов", task: "Расчёт заказов с constraints (MOQ, кратность), multi-echelon optimization." }, { name: "Логист-оптимизатор", task: "VRP-оптимизация маршрутов, консолидация заказов, GPS-трекинг ETA." }, { name: "Supply Chain Orchestrator", task: "End-to-end координация, exception handling, S&OP планирование." }] },
  { id: 'portfolio', category: 'business', title: "Управление портфелем", subtitle: "Контроль контрактов", content: "Снижение бюджетных отклонений на 25–40%. Сокращение цикла согласования актов с 14 до 3 дней.", icon: FileSearch, industry: "Строительство, нефтегаз, металлургия, ритейл", pain: "Крупные компании ведут сотни контрактов, теряя 3–8% бюджета на неконтролируемых перерасходах и штрафах.", kpis: ["Снижение бюджетных отклонений на 25–40%", "Сокращение цикла согласования актов с 14 до 3 дней", "Рост взыскания штрафных санкций на 60%"], roi_detail: "3.5x за 18 месяцев. Экономия 150–400 млн ₽ для портфеля 5 млрд ₽.", stack: "LLM, RAG, ML (CatBoost), OCR", agents: [{ name: "Портфельный аналитик", task: "Агрегация данных из ERP/ПМ, ML-прогноз отклонений (EVM), выявление рисков." }, { name: "Бюджетный контроль", task: "Детекция аномалий в платежах (>5%), проверка счетов через RAG на соответствие контракту." }, { name: "Штрафные санкции", task: "NLP-парсинг penalty-матриц, автогенерация претензионных писем." }, { name: "Ресурсное планирование", task: "Моделирование сценариев «что если», оптимизация распределения ресурсов." }] },
  { id: 'cashflow', category: 'business', title: "Дебиторка и Cash-Flow", subtitle: "Финансовая устойчивость", content: "Снижение просроченной задолженности на 30–50%. Высвобождение до 600 млн ₽ капитала.", icon: BarChart3, industry: "Дистрибьюция, оптовая торговля, телеком", pain: "До 15–25% оборотного капитала замораживается в просроченной ДЗ, ручная работа не позволяет охватить тысячи должников.", kpis: ["Снижение просроченной ДЗ на 30–50%", "Сокращение DSO на 15–25 дней", "Точность cash-flow прогноза 90%+"], roi_detail: "4.0x за 12 месяцев. Высвобождение 300–600 млн ₽ для ДЗ 2 млрд ₽.", stack: "LLM, ML, 1C/SAP, CRM", agents: [{ name: "Кредитный скоринг", task: "ML-скоринг на основе внутренних и внешних данных (СПАРК, арбитраж)." }, { name: "Мониторинг и коллекшн", task: "Классификация по aging buckets, персонализированная стратегия коммуникации через LLM." }, { name: "Сверка и реконсиляция", task: "Автоматический matching «счёт ↔ платёж ↔ отгрузка ↔ акт»." }, { name: "Cash-flow прогнозирование", task: "ML-модель на горизонте 7/30/60/90 дней, детекция кассовых разрывов." }] },
  { id: 'compliance', category: 'business', title: "Комплаенс и Аудит", subtitle: "Минимизация рисков", content: "100% покрытие нормативных изменений. Снижение штрафов на 70%. Сокращение трудозатрат на 40%.", icon: ShieldCheck, industry: "Банки, страхование, фармацевтика", pain: "300+ значимых нормативных изменений в год для крупного холдинга. Штрафы до 5% оборота, риск отзыва лицензий.", kpis: ["100% покрытие регуляторных изменений", "Адаптация политик с 45 до 10 дней", "Снижение штрафов на 70%"], roi_detail: "3.0x за 18 месяцев. Предотвращение штрафов на 200–500 млн ₽/год.", stack: "LLM, NLP, RAG, ML", agents: [{ name: "Регуляторный мониторинг", task: "Непрерывный парсинг НПА, impact assessment через LLM, авто-создание задач." }, { name: "Внутренний аудит", task: "Continuous auditing: транзакционный анализ, детекция дробления и аффилированности." }, { name: "Антикоррупционный контроль", task: "Скрининг (SDN, EU, UN), проверка аффилированности, мониторинг «красных флагов»." }, { name: "ESG и охрана труда", task: "Интеграция с АСУ ТП, HR и EHS, ESG-отчётность GRI/SASB/TCFD." }] },
  { id: 'memory', category: 'business', title: "Корпоративная Память", subtitle: "Система «Супер-память»", content: "Превращение разрозненных документов в единый мозг компании. Поиск информации быстрее на 80%.", icon: Search, industry: "Все компании от 100+ сотрудников", pain: "Сотрудники тратят 20–30% времени на поиск информации. При увольнении экспертов компания теряет знания.", kpis: ["Сокращение времени поиска на 80%", "Сохранение 90% критических знаний", "Сокращение времени онбординга на 40%"], roi_detail: "2.5x за 12 месяцев. Экономия 15 000+ часов/год на поиске информации.", stack: "LLM, RAG, Vector Search, Knowledge Graph", agents: [{ name: "Семантический поиск", task: "Естественно-языковой запрос к 10 000+ документам всех форматов (docx, pdf, xlsx, email)." }, { name: "Аудит коммуникаций", task: "Анализ 100% переписки на compliance-риски и утечки конфиденциальной информации." }, { name: "Генерация политик", task: "Авто-создание и обновление регламентов на основе лучших практик и НПА." }, { name: "Извлечение экспертизы", task: "LLM-интервью с увольняющимися экспертами для формализации неявных знаний." }] },
  { id: 'hr', category: 'business', title: "HR и Таланты", subtitle: "Управление капиталом", content: "Снижение time-to-hire на 60%. Сокращение текучки на 25%. Экономия 200+ часов HR в месяц.", icon: Users, industry: "Все компании от 50+ сотрудников", pain: "40% времени HR — рутина. Текучка стоит компании 1–2 годовых оклада на одного ушедшего.", kpis: ["Снижение time-to-hire на 60%", "Снижение текучки на 25%", "Рост eNPS на 15 пунктов"], roi_detail: "3.2x за 18 месяцев. Экономия на рекрутерах и стоимости текучки.", stack: "LLM, ML, NLP, CV, RAG", agents: [{ name: "Подбор (Scout)", task: "NLP-парсинг 15+ источников (hh.ru, LinkedIn), автоматический скрининг резюме." }, { name: "Интервьюер", task: "Проведение первичных структурированных интервью (текст/голос) с оценкой soft skills." }, { name: "Онбординг (Buddy)", task: "Персональный план адаптации 24/7, ответы на вопросы по базе знаний." }, { name: "Удержание (Keeper)", task: "ML-прогноз риска увольнения по активности в системах и тональности переписки." }] },
  { id: 'sales', category: 'business', title: "B2B Продажи", subtitle: "Revenue Operations", content: "Рост конверсии на 35%. Подготовка КП за 30 минут вместо 3 дней. ROI 4.5x.", icon: TrendingUp, industry: "ИТ, промышленность, дистрибьюция", pain: "70% лидов умирает между маркетингом и продажами. КП готовятся 2–3 дня вместо 30 минут.", kpis: ["Рост conversion rate на 35%", "Сокращение цикла сделки на 40%", "Точность прогноза pipeline до 85%"], roi_detail: "4.5x за 12 месяцев. Рост выручки без роста штата продаж.", stack: "LLM, ML, NLP, RAG, CRM", agents: [{ name: "Генерация лидов (Hunter)", task: "Скрапинг и обогащение данных о компаниях, формирование qualified lead list." }, { name: "Подготовка КП (Preparer)", task: "Автогенерация КП из шаблонов + real-time данные из ERP, персонализация под клиента." }, { name: "Переговорщик (Negotiator)", task: "Real-time assistance менеджеру при звонке, авто-формирование follow-up плана." }, { name: "Прогнозирование (Forecaster)", task: "Predictive pipeline: ML-оценка вероятности закрытия каждой сделки." }] },
  { id: 'marketing', category: 'business', title: "Маркетинг и Контент", subtitle: "AI-креатив и аналитика", content: "Снижение стоимости лида (CPL) на 30–50%. Генерация контента в 10 раз быстрее.", icon: Presentation, industry: "Кросс-отраслевой", pain: "Высокая стоимость привлечения, выгорание креативных команд, сложность персонализации на масштабе.", kpis: ["Снижение CPL на 30–50%", "Рост ROI маркетинговых кампаний на 40%", "Сокращение времени на production контента на 90%"], roi_detail: "4.5x за 12 месяцев. Экономия на агентствах и рост эффективности рекламы.", stack: "LLM, Diffusion Models, ML", agents: [{ name: "Content Generator", task: "Создание текстов, постов, сценариев и баннеров под узкие сегменты аудитории." }, { name: "Media Buyer", task: "Оптимизация ставок и бюджетов в реальном времени, A/B тестирование креативов." }, { name: "SEO-агент", task: "Автоматическая оптимизация семантики, генерация мета-данных и перелинковка." }, { name: "Аналитик трендов", task: "Мониторинг рынка и конкурентов для поиска новых углов атаки и инсайтов." }] },
  { id: 'customer-service', category: 'business', title: "Клиентский сервис", subtitle: "AI-поддержка 24/7", content: "Автоматизация 70–90% запросов. Снижение времени ответа до 5 секунд. Рост CSAT на 20%.", icon: MessageSquare, industry: "Ритейл, банки, телеком", pain: "Высокая стоимость колл-центра, долгое ожидание ответа, низкий CSAT из-за человеческого фактора.", kpis: ["Автоматизация (Deflection Rate) 70–90%", "Снижение стоимости обращения в 5–10 раз", "Рост CSAT на 20%"], roi_detail: "5.0x за 12 месяцев. Радикальное снижение затрат на поддержку при росте качества.", stack: "LLM, RAG, STT/TTS", agents: [{ name: "Support Agent", task: "Ответы на вопросы по базе знаний, решение простых тикетов, помощь в навигации." }, { name: "Triage Agent", task: "Классификация и мгновенная маршрутизация сложных запросов на профильных экспертов." }, { name: "Sentiment Analyst", task: "Мониторинг тональности в реальном времени и детекция негатива для эскалации." }, { name: "Quality Control", task: "Автоматическая проверка 100% диалогов на соблюдение скриптов и вежливость." }] },
  { id: 'legal', category: 'business', title: "Юридическая функция", subtitle: "AI-юрист", content: "Анализ 100-страничного договора за 2 минуты. Выявление 95% скрытых рисков. Ускорение в 3 раза.", icon: ShieldCheck, industry: "Кросс-отраслевой", pain: "Юристы перегружены рутиной, риск пропуска критических условий в договорах, долгие циклы согласования.", kpis: ["Сокращение времени проверки договоров на 80%", "100% покрытие типовых рисков", "Ускорение согласования в 3 раза"], roi_detail: "3.5x за 18 месяцев. Снижение юридических рисков и ускорение бизнес-процессов.", stack: "LLM, RAG, NLP, Knowledge Graph", agents: [{ name: "Contract Reviewer", task: "Анализ договоров на соответствие чек-листу и внутренним политикам компании." }, { name: "Risk Detector", task: "Поиск «подводных камней», скрытых штрафов и невыгодных условий для компании." }, { name: "Template Generator", task: "Авто-сборка сложных документов из конструктора на основе вводного ТЗ." }, { name: "Litigation Assistant", task: "Поиск судебной практики и подготовка первичных правовых позиций." }] },
  { id: 'it-dev', category: 'business', title: "ИТ и Разработка", subtitle: "AI-Native Development", content: "Ускорение разработки в 2-3 раза. Автоматическое покрытие тестами 90%+. Снижение техдолга.", icon: Zap, industry: "Кросс-отраслевой", pain: "Дефицит разработчиков, высокая стоимость legacy-кода, медленный time-to-market и ошибки в архитектуре.", kpis: ["Ускорение разработки на 150%", "Снижение багов в продакшне на 40%", "Сокращение времени на документацию на 90%"], roi_detail: "3.0x за 12 месяцев. Сокращение затрат на поддержку и ускорение выпуска новых фич.", stack: "GitHub Copilot, Cursor, LLM, LangChain", agents: [{ name: "Code Generator", task: "Написание кода по ТЗ, рефакторинг и миграция legacy-систем на современные стеки." }, { name: "QA-агент", task: "Автогенерация и запуск тестов, поиск уязвимостей и дефектов логики." }, { name: "DevOps-агент", task: "Оптимизация CI/CD пайплайнов, мониторинг инфраструктуры и авто-скейлинг." }, { name: "Doc-агент", task: "Поддержание актуальности технической документации и API-спецификаций." }] },
  { id: 'retail', category: 'industries', title: "Ритейл и Торговля", subtitle: "Динамическое управление", content: "Рост валовой маржи на 3–7%. Снижение out-of-stock на 25–40%. Оптимизация логистики.", icon: Building2, industry: "Торговые сети, e-commerce", pain: "Управление 10 000–500 000 SKU, потеря до 5–12% маржи из-за неоптимальных цен и промо.", kpis: ["Рост валовой маржи на 3–7%", "Снижение out-of-stock на 25–40%", "Снижение dead stock на 30%"], roi_detail: "4.0x за 12 месяцев. Рост маржи на 1.5–3.5 млрд ₽ для сети с оборотом 50 млрд ₽.", stack: "LLM, ML, RAG, CV", agents: [{ name: "Ценовой аналитик", task: "ML-модели ценовой эластичности по каждому SKU, расчёт оптимальной цены." }, { name: "Конкурентный мониторинг", task: "Парсинг цен конкурентов, кластеризация, рекомендации (match / ignore / undercut)." }, { name: "Ассортиментное управление", task: "ML-кластеризация ролей SKU (traffic builder / margin maker), market gap analysis." }, { name: "Визуальный мерчандайзинг", task: "CV-анализ выкладки товара на полках, детекция пустых полок и нарушений." }] },
  { id: 'manufacturing', category: 'industries', title: "Производство", subtitle: "Индустрия 4.0", content: "Снижение простоев на 40–60%. Сокращение брака на 30–50%. Предиктивное обслуживание.", icon: Zap, industry: "Тяжелая промышленность, машиностроение", pain: "Незапланированные простои — 5–20% потерь выручки. Брак — 3–8% выручки.", kpis: ["Снижение простоев на 40–60%", "Сокращение брака на 30–50%", "Рост OEE на 10–15%"], roi_detail: "4.5x за 18 месяцев. Экономия 200–300 млн ₽ для предприятия с ТОиР-бюджетом 1 млрд ₽.", stack: "IoT, ML, Digital Twin, CV, NLP", agents: [{ name: "Мониторинг состояния", task: "IoT-сенсоры, ML-детекция аномалий, health score 0–100 для каждой единицы оборудования." }, { name: "Прогнозирование отказов", task: "Remaining Useful Life, оптимальное окно для ремонта, учёт производственного плана." }, { name: "Визуальный контроль", task: "CV-инспекция (YOLOv8/RT-DETR), точность >98%, детекция брака в реальном времени." }, { name: "Цифровой двойник", task: "Симуляция «what-if» сценариев на виртуальной модели перед изменениями в производстве." }] },
  { id: 'construction', category: 'industries', title: "Строительство", subtitle: "BIM и Безопасность", content: "Снижение перерасхода с 30% до 10%. 100% детекция нарушений СИЗ на площадке.", icon: PenTool, industry: "Девелопмент, ПГС", pain: "Перерасход бюджета до 30%, задержки сроков, высокие риски травматизма на площадке.", kpis: ["Снижение перерасхода с 30% до 10%", "90% BIM-коллизий выявляется автоматически", "100% детекция нарушений СИЗ"], roi_detail: "3.5x за 18 месяцев. Значительное снижение страховых рисков и штрафов.", stack: "BIM, Drone/CV, ML, IoT, NLP", agents: [{ name: "BIM-аналитик", task: "Clash detection, нормоконтроль проектных решений через BIM." }, { name: "Агент прогресса", task: "CV-мониторинг прогресса с drone/CV, сопоставление с графиком работ." }, { name: "Контроль безопасности", task: "CV-мониторинг нарушений СИЗ, предиктивный анализ инцидентов, авто-инструктажи." }, { name: "Сметный контроль", task: "Автоматическая проверка актов (КС-2/КС-3), детекция аномалий в объемах." }] },
  { id: 'fintech', category: 'industries', title: "Финансовый сектор", subtitle: "Кредитный конвейер", content: "Решение по кредиту за 15 минут. Снижение False Positive в AML на 60–80%.", icon: Shield, industry: "Банки, МФО, финтех", pain: "40–50% времени андеррайтеров — сбор данных. Высокий уровень False Positive в AML (95–98%).", kpis: ["Решение по кредиту за 15 мин", "Снижение False Positive в AML на 60–80%", "Approval rate +10–15%"], roi_detail: "4.2x за 12 месяцев. Снижение операционных расходов на 40%.", stack: "ML, Graph ML, NLP, GNN", agents: [{ name: "Андеррайтер", task: "Сбор и верификация из 15+ источников, ensemble ML скоринг, SHAP-интерпретация." }, { name: "Фрод-мониторинг", task: "Graph ML (fraud rings), детекция поведенческих паттернов и документного фрода." }, { name: "AML-аналитик", task: "Сетевой анализ (GNN), детекция схем (structuring, layering), авто-расследования." }, { name: "Robo-advisory", task: "Персональный финансовый советник: goal-based investing, ребалансировка портфеля." }] },
  { id: 'healthcare', category: 'industries', title: "Healthcare и Фарма", subtitle: "Цифровая медицина", content: "Освобождение 2 часов/день у врача. Снижение ошибок в документации на 80%.", icon: CheckCircle2, industry: "Клиники, фарма", pain: "Врачи тратят 40% времени на заполнение документации. 15% диагнозов — ошибки из-за усталости.", kpis: ["Освобождение 2 часов/день у врача", "Снижение ошибок в документации на 80%", "Рост проходимости на 30%"], roi_detail: "2.8x за 24 месяца. Оптимизация штата и рост выручки.", stack: "LLM, NLP, CV, ML", agents: [{ name: "Scribe", task: "Автоматическое заполнение ЭМК из разговора врача и пациента (speech-to-text + NLP)." }, { name: "Triage", task: "Предварительная оценка симптомов через чат/голос, приоритизация очереди по urgency score." }, { name: "Diagnostician", task: "Поддержка принятия решений: анализ результатов исследований, drug interaction checker." }, { name: "Scheduler", task: "Оптимизация расписания врачей, минимизация окон, прогноз нагрузки по дням." }] },
  { id: 'funds', category: 'industries', title: "Фонды и Инвестиции", subtitle: "Smart Capital", content: "Автоматизация deal flow, мониторинг портфельных компаний и LP-отношений.", icon: BarChart3, industry: "PE/VC фонды, семейные офисы", pain: "60–70% времени аналитиков — рутина. Невидимые tail risks в портфеле.", kpis: ["Deal flow coverage +200%", "Скрининг с 5 дней до 4 часов", "LP-отчётность -60% времени"], roi_detail: "3.0x за 18 месяцев. Предотвращение штрафов и рост hit rate на 20–30%.", stack: "LLM, RAG, ML, GAN", agents: [{ name: "Скрининг-агент", task: "Мониторинг источников, pre-screening, investment teaser (2000 → 200 → 50 deep dive)." }, { name: "Due Diligence", task: "Автообработка data room (100–500 документов), финансовый анализ, оценка DCF." }, { name: "Риск-менеджер", task: "Real-time расчёт рыночных рисков, стресс-тестирование по GAN-сценариям." }, { name: "LP-комплаенс", task: "Автоматизация LP-отчётности, персонализация fundraising, narrative commentary." }] },
  { id: 'design-org', category: 'industries', title: "Проектные организации", subtitle: "AI-проектировщик", content: "Автоматическая проверка документации на соответствие 2000+ НПА и нормоконтроль.", icon: PenTool, industry: "Проектные институты", pain: "Замечания госэкспертизы (60–80%). Ошибки junior-специалистов (-50% знаний).", kpis: ["Экспертиза с 15 до 3 дней", "Нормоконтроль -70% времени", "Утилизация ресурсов 80–85%"], roi_detail: "2.5x за 12 месяцев. Сохранение 90% знаний и переиспользование 60% решений.", stack: "RAG, CV, LLM, ML", agents: [{ name: "Эксперт-проверщик", task: "Проверка соответствия 2000+ НПА, анализ чертежей через CV, трекинг замечаний." }, { name: "Ресурсный менеджер", task: "Прогнозирование трудоёмкости через ML, оптимизация загрузки специалистов." }, { name: "AI-ассистент", task: "Извлечение знаний из legacy-документации, каталог типовых решений." }, { name: "Оркестратор", task: "Межраздельная координация и управление изменениями в проекте." }] },
  { id: 'industrial-safety', category: 'industries', title: "Промышленная безопасность", subtitle: "Zero Harm AI", content: "Энергоэффективность, экологический мониторинг и безопасность ОПО.", icon: Shield, industry: "Металлургия, химия, добыча", pain: "Высокое удельное потребление энергии. Штрафы за экологию. Риски аварий на ОПО.", kpis: ["Снижение энергозатрат на 10–20%", "100% compliance КЭР", "Аварийность -50–70%"], roi_detail: "3.0x–4.0x за 18-24 месяца. Экономия до 1.2 млрд ₽/год на энергозатратах.", stack: "IoT, RL, Digital Twin, NLP, CV", agents: [{ name: "Энерго-оптимизатор", task: "Real-time учёт, оптимизация режимов оборудования через RL, закупка на оптовом рынке." }, { name: "Эко-мониторинг", task: "Непрерывный мониторинг выбросов, управление отходами, carbon accounting." }, { name: "Безопасность ОПО", task: "Мониторинг техсостояния через IoT, моделирование аварийных сценариев (Digital Twin)." }, { name: "ESG-оркестратор", task: "Интеграция метрик ESG, отчетность ISO 50001, M&V по ISO 50015." }] },
  { id: 'govtech', category: 'industries', title: "GovTech и Город", subtitle: "Цифровой муниципалитет", content: "Автоматизация обработки обращений граждан и оптимизация городского хозяйства.", icon: Building2, industry: "ГМУ", pain: "300+ часов на обработку сложного обращения. Госзакупки — 40% времени на ТЗ.", kpis: ["Время ответа -70%", "Подготовка ТЗ -50%", "Удовлетворенность граждан +25%"], roi_detail: "2.5x за 24 месяца. Высокий средний чек (50–200 млн ₽ на регион).", stack: "LLM, NLP, RAG, OCR/CV, ML", agents: [{ name: "Омбудсмен", task: "NLP-классификация обращений (ЖКХ, транспорт), генерация ответов из базы решений." }, { name: "Госзакупки", task: "Проверка ТЗ на коррупционные риски, подбор поставщиков, формирование документации." }, { name: "CityOps", task: "Обработка обращений по ЖКХ, маршрутизация бригад, контроль исполнения по фото (CV)." }, { name: "Администратор", task: "Единый dashboard для главы администрации: satisfaction, сроки, бюджет." }] },
  { id: 'proptech', category: 'industries', title: "Недвижимость и PropTech", subtitle: "AI-управление активами", content: "Автоматизация оценки, аренды и эксплуатации коммерческой недвижимости.", icon: Home, industry: "Девелопмент, УК", pain: "30% времени — рутина с арендаторами. Простои в аренде — 15–20% потери дохода.", kpis: ["Снижение vacancy rate на 25%", "Рост арендного дохода на 8–12%", "Time-to-lease -40%"], roi_detail: "3.0x за 18 месяцев. Снижение эксплуатационных расходов на 15%.", stack: "ML, LLM, CV, IoT", agents: [{ name: "Valuer", task: "Автоматическая оценка на основе рыночных данных, локации и инфраструктуры." }, { name: "Leasing", task: "Автоматическая коммуникация с арендаторами, скоринг потенциальных арендаторов." }, { name: "Facility", task: "Предиктивное обслуживание инженерных систем (HVAC, лифты), оптимизация энергоэффективности." }, { name: "Marketer", task: "LLM-генерация описаний, виртуальные туры из фото, автопубликация на площадках." }] },
  { id: 'aml-fraud', category: 'industries', title: "AML и Фрод-мониторинг", subtitle: "Финансовая безопасность", content: "Снижение False Positive на 60–80%. Детекция сложных схем отмывания через Graph ML.", icon: ShieldAlert, industry: "Банки, финтех", pain: "95–98% срабатываний AML — ложные. Огромный штат аналитиков на ручную проверку.", kpis: ["False Positive -60–80%", "Скорость расследования +300%", "Точность детекции схем 90%+"], roi_detail: "4.0x за 12 месяцев. Снижение ФОТ комплаенс-отдела на 40%.", stack: "GNN, NLP, LLM, ML", agents: [{ name: "Сетевой аналитик", task: "Выявление скрытых связей и групп (fraud rings) через графовый анализ." }, { name: "AML-следователь", task: "Сбор досье на клиента из 20+ источников, генерация narrative report для регулятора." }, { name: "Детектор аномалий", task: "Real-time мониторинг транзакций на предмет нетипичного поведения." }] },
  { id: 'quality-control', category: 'industries', title: "Контроль качества", subtitle: "Zero Defect", content: "CV-инспекция брака с точностью 99%+. Снижение рекламаций на 40–60%.", icon: Search, industry: "Машиностроение, электроника", pain: "Человеческий фактор при визуальном контроле. Высокая стоимость брака, доходящего до клиента.", kpis: ["Точность детекции брака 99%+", "Снижение рекламаций на 50%", "Скорость инспекции +500%"], roi_detail: "3.5x за 18 месяцев. Предотвращение репутационных и финансовых потерь.", stack: "CV (YOLOv8, RT-DETR), Edge AI, ML", agents: [{ name: "Визуальный инспектор", task: "Потоковый анализ видео с камер, детекция дефектов в реальном времени." }, { name: "Аналитик брака", task: "Корреляция дефектов с параметрами техпроцесса для выявления корневых причин." }, { name: "Traceability-агент", task: "Сквозной трекинг каждой единицы продукции от сырья до склада." }] },
  { id: 'production-planning', category: 'industries', title: "Планирование производства", subtitle: "AI-диспетчер", content: "Оптимизация производственных графиков с учетом 100+ ограничений в реальном времени.", icon: Zap, industry: "Машиностроение, металлообработка", pain: "Сложность перепланирования при сбоях. Низкая оборачиваемость НЗП. Несоблюдение сроков заказов.", kpis: ["Сокращение цикла производства на 20–30%", "Снижение НЗП на 25%", "Соблюдение сроков (OTIF) 98%+"], roi_detail: "4.0x за 12 месяцев. Рост пропускной способности без капвложений.", stack: "CP, ML, Genetic Algorithms", agents: [{ name: "Диспетчер-планировщик", task: "Автоматическая генерация сменно-суточных заданий, оптимизация загрузки станков." }, { name: "Синхронизатор", task: "Межцеховая координация, управление материальными потоками, детекция узких мест." }, { name: "Прогнозист сроков", task: "ML-расчёт реальных сроков готовности заказа с учётом текущей загрузки." }] }
];

const VariantThreeFull = () => {
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
              к <span className="text-slate-400">AI-Native</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-xl font-medium tracking-tight text-left">
              Переводим бизнес-процессы на автономные AI-системы. Измеримый результат без слома инфраструктуры.
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
            <MaturityStep level="Stage 01" title="Digital Aware" status="Текущая" desc="ИИ воспринимается как игрушка или угроза. Данные разрознены в Excel. ROI < 0.5x." />
            <MaturityStep level="Stage 02" title="AI Ready" status="Переходная" desc="ИИ используется как инструмент (Co-pilot). Люди — операторы ИИ. ROI 1.5–2.5x." />
            <MaturityStep level="Stage 03" title="AI Native" status="Целевая" current={true} desc="Процессы построены для ИИ с нуля. Агенты делают 90% работы. ROI 3.0–5.0x+." />
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
              
              {/* Горизонтальные карточки как на первом скрине */}
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
                    <p className="text-slate-500 text-sm leading-relaxed">Скорость бизнеса ограничена тем, насколько быстро один уставший сотрудник может прочитать информацию.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть: Интерактивная шкала эволюции как на втором скрине */}
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

      {/* 4. Economics */}
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

      {/* 5. Solutions Hub */}
      <section id="solutions-hub" className="py-40 bg-[#FBFBFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl text-left text-slate-900 group">
              <h2 className="text-5xl font-bold mb-6 tracking-tighter">Интерактивный хаб <span className="text-blue-600/80 group-hover:text-blue-700 transition-colors duration-500">AI-решений</span></h2>
              <p className="text-lg text-slate-500 font-medium">Исследуйте полный спектр наших возможностей: от стратегии до глубоких отраслевых вертикалей.</p>
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
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-inner"><sol.icon size={28} /></div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-slate-900 transition-colors text-left">{sol.title}</h3>
                  <div className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest mb-6">{sol.subtitle || 'Solution Architecture'}</div>
                  <p className="text-sm text-slate-500 font-medium mb-10 line-clamp-3 flex-grow text-left">{sol.content}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sol.industry}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all"><ArrowRight size={16} /></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. Roadmap */}
      <section id="roadmap" className="py-40 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Дорожная карта трансформации</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Минимальное вмешательство в IT-инфраструктуру.</p>
          </div>
          <div className="relative">
            <div className="absolute top-[48px] left-0 right-0 h-px bg-slate-100 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
              {[
                { step: "01", title: "Диагностика", time: "2-4 нед.", desc: "Поиск «бутылочных горлышек»." },
                { step: "02", title: "Стратегия", time: "4-6 нед.", desc: "Создание AI-архитектуры." },
                { step: "03", title: "Пилот", time: "8-12 нед.", desc: "Запуск первого ИИ-агента." },
                { step: "04", title: "Масштаб", time: "6-18 мес.", desc: "Переход к AI-Native." }
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

      {/* 7. Cases */}
      <section id="cases" className="py-40 bg-[#FBFBFD]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="text-left group">
              <h2 className="text-5xl font-bold mb-6 tracking-tighter text-slate-900">Реализованные <span className="text-blue-600/80 group-hover:text-blue-700 transition-colors duration-500">кейсы</span></h2>
              <p className="text-lg text-slate-500 font-medium max-w-3xl">AI-Native решения для различных отраслей: от тяжелой промышленности до GovTech. Реальный опыт внедрения и измеримые результаты.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map(c => (
              <motion.div key={c.id} onClick={() => setSelectedCase(c)} whileHover={{ y: -10 }} 
                className="group p-10 bg-white rounded-[40px] border border-slate-100 hover:border-blue-500/30 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.06)] transition-all duration-500 cursor-pointer flex flex-col h-full active:scale-[0.99] relative overflow-hidden">
                <div className="flex justify-between items-start mb-12 relative z-10 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm transition-all duration-500 group-hover:bg-blue-50 group-hover:border-blue-500/30 group-hover:text-blue-600">
                      <span className="text-sm font-black tracking-tighter">{c.id.split('-')[1]}</span>
                    </div>
                    <div className="h-px w-8 bg-slate-100 group-hover:w-12 group-hover:bg-blue-200 transition-all duration-500" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Impact Case</span>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">Industry focus</span>
                  </div>
                </div>
                <div className="flex-grow text-left">
                  <h3 className="text-3xl font-bold mb-4 tracking-tighter leading-tight text-slate-900 group-hover:text-slate-700 transition-colors text-left">{c.title}</h3>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-50 pb-4 group-hover:text-blue-500/40 transition-colors">{c.stack}</div>
                  <p className="text-base text-slate-500 font-medium mb-12 line-clamp-3 text-left leading-relaxed">{c.problem}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-12 relative z-10 text-left">
                  {c.results.map((r, i) => (
                    <div key={i} className="bg-slate-50/50 p-8 rounded-[24px] border border-slate-50 group-hover:bg-white group-hover:border-blue-500/20 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.04)] transition-all duration-500 group/res">
                      <div className="text-4xl font-black text-slate-900 tracking-tighter mb-2 group-hover/res:text-blue-600 transition-colors text-left">{r.value}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-all relative z-10 text-left group/btn">
                  Изучить детали кейса <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ArrowRight size={14} /></motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Urgency */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-slate-100/30 select-none pointer-events-none hidden lg:block tracking-tighter">24</div>
          <div className="text-left z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 mb-12 uppercase tracking-[0.3em] border border-slate-100"><AlertTriangle size={14} /> Риск бездействия</div>
            <h2 className="text-6xl md:text-8xl font-bold text-slate-900 mb-12 tracking-tighter leading-[0.9]">У вас осталось <br /><span className="text-blue-600/40">24 месяца.</span></h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed max-w-xl text-left font-medium">Рынок не будет ждать. Трансформация или необратимая потеря маржи в ближайшие 2 года. Экономика нового времени не прощает медлительности.</p>
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

      {/* 9. Contact */}
      <section id="contact" className="py-40 bg-[#FBFBFD] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="text-left">
            <h2 className="text-6xl font-bold mb-12 tracking-tighter leading-[0.9] text-slate-900 text-left">Станьте <br /><span className="text-slate-400 group-hover:text-blue-600 transition-colors">дирижером</span> <br />цифрового <br />оркестра.</h2>
            <p className="text-xl text-slate-500 mb-20 leading-relaxed font-medium">Перестаньте быть главным исполнителем рутины и тушителем пожаров. Отдайте хаос алгоритмам и сосредоточьтесь на стратегии. Ваш бизнес-болид готов к запуску.</p>
            <div className="space-y-10 text-left">
              <div className="flex items-center gap-8 group text-left cursor-pointer">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all text-left shadow-sm"><Mail size={24} /></div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Пишите нам</div>
                  <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-left tracking-tight">hello@ai-advisory.ru</div>
                </div>
              </div>
              <div className="flex items-center gap-8 group text-left cursor-pointer">
                <div className="w-16 h-16 bg-white border border-slate-100 rounded-[20px] flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all text-left shadow-sm"><Phone size={24} /></div>
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Звоните нам</div>
                  <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-left tracking-tight">+7 (495) 000-00-00</div>
                </div>
              </div>
            </div>
          </div>
          <LeadForm title="Записаться на аудит" subtitle="Мы проанализируем ваши процессы и подготовим расчет ROI за 48 часов." />
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center gap-4 opacity-40 grayscale group cursor-pointer hover:opacity-100 transition-all">
            <div className="w-12 h-12 bg-slate-900 rounded-[16px] flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">AI</div>
            <span className="font-bold text-slate-900 tracking-tighter text-xl uppercase">TRANSFORMATION</span>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
          </div>
          <p className="text-slate-300 font-bold uppercase tracking-[0.5em] text-[9px]">AI Advisory © 2026. Все права защищены.</p>
        </div>
      </footer>

      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedSolution(null)} className="absolute inset-0 bg-slate-900/10 backdrop-blur-3xl" />
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="relative w-full max-w-5xl bg-white rounded-[44px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left border border-slate-200">
              {/* Header: Премиальный темный стиль */}
              <div className="bg-slate-900 p-10 md:p-14 flex items-start justify-between text-left relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-8 text-left relative z-10">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center text-white border border-white/20 text-left shadow-2xl"><selectedSolution.icon size={40} /></div>
                  <div className="text-white text-left">
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-3 text-left">Architecture</div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-left leading-tight">{selectedSolution.title}</h3>
                    <p className="text-slate-400 font-bold mt-2 text-lg text-left">{selectedSolution.subtitle}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedSolution(null)} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all border border-white/10 relative z-10"><X size={24} /></button>
              </div>

              {/* Body: Понятная вертикальная структура */}
              <div className="p-10 md:p-14 overflow-y-auto bg-white text-left custom-scrollbar">
                <div className="flex flex-col lg:flex-row gap-16 text-left items-start">
                  
                  {/* Основной поток (Левая часть) - 65% ширины */}
                  <div className="flex-grow lg:w-[65%] space-y-12 text-left">
                    <div className="text-left">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-4 text-left">Суть решения</h4>
                      <p className="text-2xl text-slate-800 leading-relaxed font-semibold text-left tracking-tight">{selectedSolution.content}</p>
                    </div>
                    <div className="text-left">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2 text-left">Отрасль</h4>
                      <p className="text-slate-600 font-bold">{selectedSolution.industry}</p>
                    </div>
                    <div className="text-left p-10 bg-red-50/40 rounded-[32px] border border-red-100/30 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full" />
                      <h4 className="text-[10px] font-black text-red-400/80 uppercase tracking-[0.3em] mb-4 text-left relative z-10">Бизнес-боль</h4>
                      <p className="text-lg text-slate-700 leading-relaxed text-left font-medium relative z-10">{selectedSolution.pain}</p>
                    </div>
                    {selectedSolution.agents && (
                      <div className="text-left pt-6">
                        <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-8 text-left">Детализация по агентам</h4>
                        <div className="space-y-4 text-left">
                          {selectedSolution.agents.map((agent: any, idx: any) => (
                            <div key={idx} className="p-8 bg-slate-50/50 rounded-[28px] border border-slate-100 hover:border-blue-500/20 hover:bg-white hover:shadow-xl transition-all duration-500 group/agent flex items-start gap-6">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0 group-hover/agent:scale-150 transition-transform" />
                              <div className="text-left">
                                <div className="font-bold text-xl text-slate-900 text-left tracking-tight mb-2">{agent.name}</div>
                                <div className="text-base text-slate-500 leading-relaxed text-left font-medium">{agent.task}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar (Правая часть) - Фиксированная ширина */}
                  <div className="lg:w-[350px] space-y-8 text-left lg:sticky lg:top-0 shrink-0">
                    <div className="bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                      <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-10 text-left">Целевые KPI</h4>
                      <div className="space-y-6 text-left">
                        {selectedSolution.kpis.map((kpi: any, i: any) => (
                          <div key={i} className="flex items-start gap-4 text-left">
                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <ArrowRight size={12} className="text-blue-400" />
                            </div>
                            <span className="text-base font-bold leading-tight text-left text-white/90">{kpi}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-12 pt-12 border-t border-white/10 text-left">
                        <div className="text-[10px] font-black text-white/30 uppercase mb-4 text-left tracking-widest">ROI Эффект</div>
                        <div className="text-2xl font-bold text-blue-400 text-left leading-tight tracking-tight">{selectedSolution.roi_detail}</div>
                      </div>
                    </div>
                    <div className="px-6 text-left">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6 text-left">Технологический стек</h4>
                      <div className="flex flex-wrap gap-2 text-left">
                        {selectedSolution.stack.split(',').map((s: any, i: any) => (
                          <span key={i} className="px-4 py-2 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-bold uppercase tracking-widest text-left">{s.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons: Clean Apple Style */}
                <div className="mt-12 flex flex-col md:flex-row gap-4 shrink-0">
                  <button onClick={() => setSelectedSolution(null)} className="flex-1 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all py-5 shadow-lg active:scale-[0.98]">Обсудить внедрение</button>
                  <button onClick={() => setSelectedSolution(null)} className="flex-1 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-lg hover:text-slate-900 hover:border-slate-400 transition-all py-5">Закрыть обзор</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCase(null)} className="absolute inset-0 bg-slate-900/20 backdrop-blur-3xl" />
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="relative w-full max-w-6xl bg-white rounded-[44px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left border border-slate-200">
              <div className="p-10 md:p-16 overflow-y-auto text-left custom-scrollbar">
                <div className="flex justify-between items-start mb-20 text-left">
                  <div className="text-left">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-6 text-left">Case Portfolio — {selectedCase.id.toUpperCase()}</div>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 text-left leading-[0.9]">{selectedCase.title}</h3>
                  </div>
                  <button onClick={() => setSelectedCase(null)} className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-100 shadow-sm"><X size={32} /></button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-left items-start">
                  <div className="space-y-16 text-left">
                    <section className="text-left"><h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-8 text-left">Бизнес-проблема</h4><p className="text-3xl text-slate-700 leading-tight font-medium text-left tracking-tight">{selectedCase.problem}</p></section>
                    <section className="pt-16 border-t border-slate-50 text-left">
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-10 text-left">Инженерное решение</h4>
                      <div className="space-y-12 text-left">
                        {selectedCase.solution.map((step: any, i: any) => (
                          <div key={i} className="text-left relative pl-10 border-l border-slate-100">
                            <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                            <div className="text-[11px] font-black text-slate-900 mb-3 uppercase tracking-[0.2em] text-left">{step.label}</div>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed text-left">{step.text}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className="text-left space-y-10 lg:sticky lg:top-0">
                    <div className="bg-slate-950 p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all" />
                      <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-12 text-left">Результаты внедрения</h4>
                      <div className="space-y-12 text-left">
                        {selectedCase.results.map((r: any, i: any) => (
                          <div key={i} className="text-left group/res">
                            <div className="text-6xl md:text-8xl font-black text-white mb-2 text-left tracking-tighter group-hover/res:text-blue-400 transition-colors leading-none">{r.value}</div>
                            <div className="text-xs font-black text-white/30 uppercase tracking-[0.4em] text-left">{r.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-20 pt-12 border-t border-white/10 text-left">
                        <h4 className="text-[10px] font-black text-white/30 uppercase mb-6 text-left tracking-widest">Технологический стек</h4>
                        <div className="flex flex-wrap gap-2 text-left">{selectedCase.stack.split('|').map((s: any, i: any) => (<span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white/60 text-left border border-white/5">{s.trim()}</span>))}</div>
                      </div>
                    </div>
                    <button onClick={() => setSelectedCase(null)} className="w-full h-20 bg-blue-600 text-white rounded-[28px] font-black text-2xl mt-12 text-center shadow-2xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all">Закрыть проект</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default VariantThreeFull;
