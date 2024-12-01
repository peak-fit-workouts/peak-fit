import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { TrainingCardModalContextProvider } from "@/context/TrainingCardModalContext";
import { TrainingsContextProvider } from "@/context/trainingsContext";
import { NextUIProvider } from "@nextui-org/react";

import type { AppProps } from "next/app";
import TrainingCardModal from "@/components/TrainingCardModal";
import { InfoModalContextProvider } from "@/context/infoModalContext";
import InfoModal from "@/components/InfoModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <TrainingCardModalContextProvider>
        <InfoModalContextProvider>
          <TrainingsContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <InfoModal />
            <TrainingCardModal />
          </TrainingsContextProvider>
        </InfoModalContextProvider>
      </TrainingCardModalContextProvider>
    </NextUIProvider>
  );
}
