import { Profile } from "@payvo/profiles"

const theme = Profile.settings("theme", "dunno");
console.log(theme);