import NavbarHome from "@/components/Shared/NavBarHome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="background-light850_dark100 min-h-screen dark:bg-slate-800">
      <NavbarHome />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="heroImage"
                src="/assets/images/doctors1.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                width={200}
                height={200}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-dark300_light700">
                Grow your audience
              </h2>

              <p className="mt-4  text-dark300_light700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-dark300_light700 transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
