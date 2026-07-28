import { MapPin, Navigation, Map } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function MapSection() {
  const { t } = useLanguage();

  const handleGoogleMaps = () => {
    // Opens official Google Maps location for Parking One
    window.open("https://maps.app.goo.gl/Kt5uvoMzhEzprwYq6", "_blank");
  };

  const handleWaze = () => {
    // Opens official Waze navigation for Parking One
    window.open("https://waze.com/ul/hsx8du64xg", "_blank");
  };

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("howToFindUs")}</h2>
          </div>

          <Card className="overflow-hidden">
            <div className="relative w-full h-[500px] block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d733.2416715552606!2d23.392791269683165!3d42.683247998197835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQwJzU5LjciTiAyM8KwMjMnMzYuNCJF!5e0!3m2!1sen!2sbg!4v1785254430705!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Parking One Location"
                className="block"
              ></iframe>
            </div>
            
            <div className="p-6 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900">Parking One</p>
                <p className="text-sm text-gray-600">Ulitsa Iztochna Tangeta 23, Sofia, Bulgaria</p>
              </div>
              <div className="flex flex-row gap-3">
                <Button 
                  onClick={handleGoogleMaps}
                  size="lg"
                  className="bg-[#0073AC] hover:bg-[#0073AC]/90 text-[#FAF9F6]"
                >
                  <img 
                    src="/google-maps-icon.png" 
                    alt="Google Maps" 
                    className="mr-2 h-5 w-5"
                  />
                  {t("googleMaps")}
                </Button>
                <Button 
                  onClick={handleWaze}
                  size="lg"
                  className="bg-[#FAF9F6] hover:bg-[#FAF9F6]/90 text-[#0073AC]"
                >
                  <img 
                    src="/waze-icon.png" 
                    alt="Waze" 
                    className="mr-2 h-5 w-5"
                  />
                  {t("waze")}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}