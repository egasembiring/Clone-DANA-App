import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>DANAIN</Text>
            <Text style={styles.subtitle}>Digital Wallet Clone</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome to DANAIN</Text>
              <Text style={styles.sectionDescription}>
                DANAIN is a fintech application clone that provides various
                digital financial services for seamless transactions.
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Features</Text>
              <Text style={styles.sectionDescription}>
                • Digital payments and transfers{'\n'}• Bill payments and top-up
                services{'\n'}• E-commerce integration{'\n'}• QR code payments
                {'\n'}• Account management
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Technology Stack</Text>
              <Text style={styles.sectionDescription}>
                Built with React Native, Node.js, and Express.js
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingVertical: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 8,
    opacity: 0.9,
  },
  body: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2196F3',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
    lineHeight: 24,
  },
});

export default App;
