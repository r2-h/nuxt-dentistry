import Implant from "./components/icons/Implant.vue"
import Mouth from "./components/icons/Mouth.vue"
import Teeth2 from "./components/icons/Teeth2.vue"

export type Services = {
  icon: object
  title: string
  description: string
}
export const SERVICES: Services[] = [
  {
    icon: Teeth2,
    title: "Root Canal Treatment",
    description:
      "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
  },
  {
    icon: Mouth,
    title: "Cosmetic Dentist",
    description:
      "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
  },
  {
    icon: Implant,
    title: "Dental Implants",
    description:
      "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
  },
] as const
