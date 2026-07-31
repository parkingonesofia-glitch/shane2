import { useEffect } from "react";
import { Header } from "../components/Header";

export function CookiePolicyPage() {
  useEffect(() => {
    document.title = "Политика за бисквитки - Parking One";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] md:pt-[180px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Политика за бисквитки</h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Какво са бисквитките?</h2>
              <p>
                Бисквитките (cookies) са малки текстови файлове, които се записват на вашето устройство при посещение на уебсайт. Те позволяват на сайта да запомни вашите предпочитания и да функционира правилно.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Какви бисквитки използваме</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Задължителни бисквитки</h3>
              <p>Необходими за работата на сайта. Без тях резервационната форма и навигацията не функционират. Не могат да бъдат изключени.</p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Аналитични бисквитки</h3>
              <p>
                Използваме <strong>Google Analytics</strong> за анализ на трафика и поведението на потребителите (напр. кои страници се посещават). Данните са анонимизирани и се използват само за подобряване на сайта.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Рекламни бисквитки (трети страни)</h3>
              <p>
                Ако използваме Google Ads, могат да бъдат зададени бисквитки от Google LLC за измерване на ефективността на реклами. Google обработва тези данни съгласно собствената си политика за поверителност.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Как да управлявате бисквитките</h2>
              <p>Можете да контролирате и изтривате бисквитки от настройките на вашия браузър:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Chrome:</strong> Настройки → Поверителност и сигурност → Бисквитки</li>
                <li><strong>Firefox:</strong> Настройки → Поверителност и сигурност</li>
                <li><strong>Safari:</strong> Предпочитания → Поверителност</li>
                <li><strong>Edge:</strong> Настройки → Бисквитки и разрешения за сайтове</li>
              </ul>
              <p className="mt-3">
                Имайте предвид, че изключването на определени бисквитки може да засегне функционалността на сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Промени в тази политика</h2>
              <p>
                Можем да актуализираме тази политика при промяна на използваните технологии или законодателни изисквания. Актуалната версия винаги е достъпна на тази страница.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-10">Последна актуализация: юли 2026 г.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
