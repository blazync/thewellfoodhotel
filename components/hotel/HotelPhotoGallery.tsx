import Image from "next/image";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Bath,
  Bike,
  Dumbbell,
  Hotel,
  MapPin,
  ShoppingBag,
  Wifi,
} from "lucide-react";
import AmenityItem from "../AmenityItem";

const HotelPhotoGallery = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 pb-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
          <div>
            <Image
              width={400}
              height={600}
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/room1.webp"
              alt="gallery-photo"
            />
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-xl md:text-3xl">
                The Well food Hotel
              </h3>
              <div className="font-semibold mt-4">
                <AmenityItem>
                  <MapPin className="h-4 w-4" />
                  Jharkhand, Ranchi
                </AmenityItem>
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-2">Description</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start text-sm">
              <AmenityItem>
                <Bike className="h-4 w-4" />
                Free Parking
              </AmenityItem>

              <AmenityItem>
                <Dumbbell className="h-4 w-4" />
                Gym
              </AmenityItem>

              <AmenityItem>
                <Hotel className="h-4 w-4" />
                Restaurant
              </AmenityItem>
              <AmenityItem>
                <ShoppingBag className="h-4 w-4" />
                Shopping
              </AmenityItem>

              <AmenityItem>
                <Bath className="h-4 w-4" />
                Swimming Pool
              </AmenityItem>

              <AmenityItem>
                <Wifi className="h-4 w-4" />
                Free Wifi
              </AmenityItem>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl md:text-3xl text-yellow-900">
            Hotel Photo Gallary
          </h3>
          <p>
            Image lists represent a collection of items in a repeated pattern.
            They help improve the visual comprehension of the content they hold.
          </p>
        </div>
        <div className="apespect-square overflow-hidden relative w-fulll h-[200px] md:h-[400px] rounded-lg">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
              <div>
                <Image
                  width={400}
                  height={600}
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="/room1.webp"
                  alt="gallery-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelPhotoGallery;
