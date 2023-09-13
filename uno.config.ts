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
      gray: "#676767",
    },
  },

  shortcuts: {
    container: "px-[94px]",

    input: "border p-3 outline-transparent focus:outline-gray transition",

    // Buttons
    "btn-red-filled":
      "bg-red text-white flex justify-center items-center p-4",
  },
});
