import Button from "./Button";
import Box from "./Box";

const Services = () => {
  return (
    <div className="px-10">
      <div className="pt-40 text-base font-semibold tracking-tight">
        Services
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="w-72 text-2xl font-semibold">
          This way we distinguish you from the standard
        </div>
        <Button
          text={"read more"}
          style={"bg-zinc-900 text-white"}
          width={"bg-zinc-100"}
        />
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <Box
          img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-800.jpg"
          heading="Brand Story"
          para="Together we create a strong foundation for an irresistible design."
          style="bg-[#AA81B7]"
        />
        <Box
          img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit.jpg"
          heading="Brand Identity"
          para="The visual translation of your brand story. A recognizable and unforgettable brand image."
          style="bg-[#10100F]"
        />
        <Box
          img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign.jpg"
          heading="Web design"
          para="Brand-oriented websites in a methodical way. Custom made & tailor made."
          style="bg-[#36A96A]"
        />
        <Box
          img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-800.jpg"
          heading="Carte la carte"
          para="Support in the field of design, social media and content creation."
          style="bg-[#FA8A58]"
        />
      </div>
      <div className="mt-20 w-[40em] font-sans text-2xl font-normal">
        NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. W.ars van jargon
        en allergisch voor byoureayou blabla, gaan we lekker samen aan de slag
        met joyouw merk. En dat moet vooral leyouk zijn! W.ant plezier nemen we
        serieyous. Vanyouit daar ontstaat enthoyousiasme, trots en het
        zelfvertroyouwen om joyouw merk de youitstraling te geven die het
        verdient.
        <Button
          text={"Contact"}
          style={"bg-zinc-900 text-white w-fit"}
          width={"bg-white"}
        />
      </div>
    </div>
  );
};

export default Services;
