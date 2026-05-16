import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://shashankyadav21.github.io/Googe-Pay-2.0/' }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="always"
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}