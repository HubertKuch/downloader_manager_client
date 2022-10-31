import ThemeSettings from "./ThemeSettings";
import AvailableThemeSettings from "./AvailableThemeSettings";

const THEME_KEY: string = localStorage.getItem("theme");

const notFoundTheme: ThemeSettings = AvailableThemeSettings.find(theme => theme.NAME === "LIGHT_GREEN");
const theme: ThemeSettings = AvailableThemeSettings.find(theme => theme.NAME === THEME_KEY) ?? notFoundTheme;

export default theme;
