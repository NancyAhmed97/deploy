import "../public/css/bootstrap.min.css";
import "../public/css/fontawesome.min.css";
import "../public/css/animate.min.css";
import "../public/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-image-lightbox/style.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/rtl.css";
import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
export default class MyApp extends App {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const persistor = persistStore(store);
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Tuam - React Next Office Space & Rental Template</title>
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
        <Loader loading={this.state.loading} />

        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </>
    );
  }
}
