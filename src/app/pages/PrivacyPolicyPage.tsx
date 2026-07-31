import { useEffect } from "react";
import { Header } from "../components/Header";
import { useNavigate } from "react-router";

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Политика за поверителност - Parking One";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] md:pt-[180px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Политика за поверителност</h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Администратор на лични данни</h2>
              <p>
                Администратор на личните ви данни е <strong>"Ю Транс" ЕООД</strong>, ЕИК 207838282,
                с адрес: Улица Източна Тангента 23, София, България.
              </p>
              <p>Контакт за въпроси, свързани с личните данни:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имейл: <a href="mailto:parking.one.sofia@gmail.com" className="text-[#0073AC] underline">parking.one.sofia@gmail.com</a></li>
                <li>Телефон: <a href="tel:+359877109788" className="text-[#0073AC] underline">+359 877 109 788</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Какви лични данни събираме и защо</h2>
              <p>При направена резервация събираме следните данни:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Имена</strong> — за идентификация на резервацията</li>
                <li><strong>Имейл адрес</strong> — за изпращане на потвърждение и информация за резервацията</li>
                <li><strong>Телефонен номер</strong> — за потвърждение и оперативна връзка</li>
                <li><strong>Данни за автомобила</strong> (марка, модел, регистрационен номер) — за управление на паркинг услугата</li>
                <li><strong>Дати на пристигане и заминаване</strong> — за осигуряване на паркомясто</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Правно основание за обработка (GDPR, чл. 6)</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Чл. 6, ал. 1, б. „б"</strong> — обработката е необходима за изпълнение на договор (резервация на паркинг услуга)</li>
                <li><strong>Чл. 6, ал. 1, б. „в"</strong> — спазване на законово задължение</li>
                <li><strong>Чл. 6, ал. 1, б. „е"</strong> — легитимен интерес за подобряване на услугата и сигурност</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Срок на съхранение</h2>
              <p>
                Личните данни, свързани с резервации, се съхраняват за срок от <strong>3 години</strong> след датата на последното ползване на услугата, освен ако приложимото законодателство не изисква по-дълъг срок (напр. счетоводни документи — 5 години).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Вашите права</h2>
              <p>Имате право да:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Достъп</strong> — да получите копие на данните, които съхраняваме за вас</li>
                <li><strong>Коригиране</strong> — да поискате поправка на неточни данни</li>
                <li><strong>Изтриване</strong> — „правото да бъдете забравени", при условие че няма законово задължение за съхранение</li>
                <li><strong>Ограничаване на обработката</strong> — в определени случаи</li>
                <li><strong>Преносимост</strong> — да получите данните си в структуриран формат</li>
                <li><strong>Възражение</strong> — срещу обработката въз основа на легитимен интерес</li>
              </ul>
              <p className="mt-3">
                За упражняване на правата си, моля свържете се с нас на <a href="mailto:parking.one.sofia@gmail.com" className="text-[#0073AC] underline">parking.one.sofia@gmail.com</a>.
                Имате право и да подадете жалба до <strong>Комисия за защита на личните данни (КЗЛД)</strong> на адрес: гр. София, бул. „Цветан Лазаров" № 2.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Бисквитки</h2>
              <p>
                Уебсайтът използва бисквитки. Повече информация можете да намерите в нашата{" "}
                <button onClick={() => navigate("/cookie-policy")} className="text-[#0073AC] underline">
                  Политика за бисквитки
                </button>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Споделяне с трети страни</h2>
              <p>
                Вашите данни не се продават и не се споделят с трети страни за маркетингови цели. Данните могат да бъдат предоставени единствено на доставчици на технически услуги (хостинг, имейл) при стриктно спазване на GDPR.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-10">Последна актуализация: юли 2026 г.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
