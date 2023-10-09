// uno.config.ts
import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  // ...UnoCSS options
  transformers: [transformerVariantGroup(), transformerDirectives()],

  theme: {
    colors: {
      red: "#F00",
      dark_red: "#C00",
      gray: "#676767",
      dark: "#454545",
    },
  },

  shortcuts: {
    container: "mx-[5px] lg:mx-[94px]",

    b: "b-dark border-[0.5px]",

    // Inputs
    input:
      "p-3 outline-transparent outline-none focus:outline-gray bg-dark transition bg-opacity-40",
    "input-black": "border border-black p-3 px-5 outline-none ",

    // Buttons
    "btn-red-filled":
      "bg-red hover:bg-dark_red transition text-white flex justify-center items-center p-4",
    "btn-red-outline":
      "bg-transparent border border-red p-3 px-5 transition hover:bg-red hover:text-white hover:border-transparent",

    "btn-black-outline":
      "bg-transparent  b hover:(b-white) p-3 px-5 transition flex justify-center items-center ",
  },
});
