import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { label: "Čeština", value: "cs" },
    { label: "Dansk", value: "da" },
    { label: "Deutsch", value: "de" },
    { label: "English", value: "en" },
    { label: "Español", value: "es" },
    { label: "Français", value: "fr" },
    { label: "Italiano", value: "it" },
    { label: "Nederlands", value: "nl" },
    { label: "Norsk (bokmål)", value: "nb" },
    { label: "Polski", value: "pl" },
    { label: "Português (Brasil)", value: "pt-BR" },
    { label: "Português (Portugal)", value: "pt-PT" },
    { label: "Suomi", value: "fi" },
    { label: "Svenska", value: "sv" },
    { label: "Türkçe", value: "tr" },
    { label: "ภาษาไทย", value: "th" },
    { label: "日本語", value: "ja" },
    { label: "简体中文", value: "zh-CN" },
    { label: "繁體中文", value: "zh-TW" },
    { label: "한국어", value: "ko" }
  ];

    // Dynamically create actions based on languages
    const languageActions = languages.map((language) => ({
      content: language.label,
      accessibilityLabel: language.label,
      onAction: () => {
        changeLanguage(language.value);
      },
    }));

    const currentLanguage = languages.find(lang => lang.value === i18n.language);


  return (
    <Page
    actionGroups={[
      {
        title: currentLanguage?.label,
        actions: languageActions
      },
    ]}
    >
      <Layout>
        <Layout.Section variant="fullWidth">
          <Card>
            
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
