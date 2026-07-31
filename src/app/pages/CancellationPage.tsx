import { useEffect } from "react";
import { Header } from "../components/Header";

export function CancellationPage() {
  useEffect(() => {
    document.title = "Условия за отмяна и възстановяване - Parking One";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[120px] md:pt-[180px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Условия за отмяна и възстановяване</h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Отмяна на резервация</h2>
              <p>
                Можете да отмените резервацията си безплатно, ако го направите най-мално <strong>24 часа преди датата на пристигане</strong>.
              </p>
              <p>
                За отмяна, направена по-малко от 24 часа преди пристигането, не се дължи такса, тъй като Parking One не изисква предплащане при резервация.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Възстановяване на суми</h2>
              <p>
                Тъй като услугата се заплаща на място (при пристигане или при напускане), не се извършва предварително плащане и съответно не е необходимо възстановяване на суми при отмяна.
              </p>
              <p>
                В случай на изключителни обстоятелства и предварително заплатена услуга, молбите за възстановяване се разглеждат индивидуално в срок от 5 работни дни.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Непоявяване (No-show)</h2>
              <p>
                При непоявяване на клиент без предварително уведомление, резервацията се анулира автоматично. Не се начислява такса за непоявяване.
              </p>
              <p>
                Parking One си запазва правото да не приема бъдещи резервации от клиенти с повторно непоявяване без уведомление.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Закъснение и промяна на полет</h2>
              <p>
                Разбираме, че полетите могат да закъснеят или да бъдат отменени. Моля, уведомете ни при промяна в датата или часа на пристигане възможно най-скоро:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Телефон: <a href="tel:+359877109788" className="text-[#0073AC] underline">+359 877 109 788</a></li>
                <li>Имейл: <a href="mailto:info@parkingone.bg" className="text-[#0073AC] underline">info@parkingone.bg</a></li>
              </ul>
              <p className="mt-3">
                При закъснение автомобилът остава в паркинга и ще бъде таксуван за реалното време на престой съгласно действащите тарифи.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Как да отмените резервация</h2>
              <p>Резервацията може да бъде отменена по следните начини:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Телефон:</strong> <a href="tel:+359877109788" className="text-[#0073AC] underline">+359 877 109 788</a> (24/7)</li>
                <li><strong>Имейл:</strong> <a href="mailto:info@parkingone.bg" className="text-[#0073AC] underline">info@parkingone.bg</a></li>
              </ul>
              <p className="mt-3">Моля, посочете вашето име и датата на резервацията при контакт.</p>
            </section>

            <p className="text-sm text-gray-500 mt-10">Последна актуализация: юли 2026 г.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
