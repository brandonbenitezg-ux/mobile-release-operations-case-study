import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  Pressable,
  Platform,
  View,
} from 'react-native';

const transactions = [
  { id: '1', date: 'Sep 4', description: 'Campus Bookstore', type: 'Purchase', amount: -64.25 },
  { id: '2', date: 'Sep 3', description: 'Payroll Deposit', type: 'Deposit', amount: 825.0 },
  { id: '3', date: 'Sep 2', description: 'Mobile Check Deposit', type: 'Deposit', amount: 120.0 },
  { id: '4', date: 'Sep 1', description: 'Pine Street Market', type: 'Purchase', amount: -38.41 },
  { id: '5', date: 'Aug 31', description: 'Online Transfer', type: 'Withdrawal', amount: -200.0 },
  { id: '6', date: 'Aug 30', description: 'Account Dividend', type: 'Deposit', amount: 4.62 },
];

function formatMoney(amount) {
  const sign = amount < 0 ? '-' : '+';
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
}

function TransactionRow({ item, largeText }) {
  return (
    <View style={styles.transactionRow}>
      <View style={styles.transactionDetails}>
        <Text style={[styles.transactionName, largeText && styles.largeBody]}>{item.description}</Text>
        <Text style={[styles.mutedText, largeText && styles.largeSmall]}>
          {item.date} - {item.type}
        </Text>
      </View>
      <Text
        style={[
          styles.amount,
          item.amount >= 0 ? styles.positive : styles.negative,
          largeText && styles.largeBody,
        ]}
      >
        {formatMoney(item.amount)}
      </Text>
    </View>
  );
}

function AppHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.brand}>PINEHAVEN</Text>
        <Text style={styles.brandSub}>MOBILE DEMO</Text>
      </View>
      <View style={styles.demoBadge}>
        <Text style={styles.demoBadgeText}>DEMO</Text>
      </View>
    </View>
  );
}

function HomeScreen({ largeText }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <Text style={[styles.greeting, largeText && styles.largeTitle]}>Good afternoon, Taylor</Text>
      <Text style={[styles.disclaimer, largeText && styles.largeSmall]}>
        Fictional information for portfolio testing only
      </Text>

      <View style={styles.balanceCard}>
        <Text style={[styles.balanceLabel, largeText && styles.largeSmall]}>TOTAL AVAILABLE BALANCE</Text>
        <Text style={[styles.balanceTotal, largeText && { fontSize: 38 }]}>$11,270.59</Text>
      </View>

      <View style={styles.accountCard}>
        <View>
          <Text style={[styles.accountName, largeText && styles.largeBody]}>Demo Checking</Text>
          <Text style={[styles.mutedText, largeText && styles.largeSmall]}>**** 4821</Text>
        </View>
        <Text style={[styles.accountBalance, largeText && styles.largeBody]}>$2,850.47</Text>
      </View>

      <View style={styles.accountCard}>
        <View>
          <Text style={[styles.accountName, largeText && styles.largeBody]}>Demo Savings</Text>
          <Text style={[styles.mutedText, largeText && styles.largeSmall]}>**** 9044</Text>
        </View>
        <Text style={[styles.accountBalance, largeText && styles.largeBody]}>$8,420.12</Text>
      </View>

      <Text style={[styles.sectionTitle, largeText && styles.largeHeading]}>Recent activity</Text>
      <View style={styles.listCard}>
        {transactions.slice(0, 3).map((item) => (
          <TransactionRow key={item.id} item={item} largeText={largeText} />
        ))}
      </View>
    </ScrollView>
  );
}

function TransactionsScreen({ largeText }) {
  const [filter, setFilter] = useState('All');

  const visibleTransactions = transactions.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Deposits') {
      return item.type === 'Deposit';
    }
    return item.amount < 0;
  });

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <Text style={[styles.pageTitle, largeText && styles.largeTitle]}>Transactions</Text>
      <Text style={[styles.disclaimer, largeText && styles.largeSmall]}>Demo Checking **** 4821</Text>

      <View style={styles.filterRow}>
        {['All', 'Deposits', 'Withdrawals'].map((option) => (
          <Pressable
            key={option}
            onPress={() => setFilter(option)}
            style={[styles.filterButton, filter === option && styles.filterButtonActive]}
          >
            <Text
              style={[
                styles.filterText,
                filter === option && styles.filterTextActive,
                largeText && styles.largeSmall,
              ]}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={[styles.resultCount, largeText && styles.largeSmall]}>
        {visibleTransactions.length} transactions shown
      </Text>

      <View style={styles.listCard}>
        {visibleTransactions.map((item) => (
          <TransactionRow key={item.id} item={item} largeText={largeText} />
        ))}
      </View>
    </ScrollView>
  );
}

function SettingsScreen({ alertsEnabled, setAlertsEnabled, largeText, setLargeText }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <Text style={[styles.pageTitle, largeText && styles.largeTitle]}>Settings</Text>

      <View style={styles.settingsCard}>
        <View style={styles.settingRow}>
          <View style={styles.settingTextArea}>
            <Text style={[styles.settingTitle, largeText && styles.largeBody]}>Account notifications</Text>
            <View style={styles.fixedDescriptionArea}>
              <Text style={[styles.settingDescription, largeText && styles.largeDescription]}>
                Receive updates about activity in your demo account.
              </Text>
            </View>
          </View>
          <Switch value={alertsEnabled} onValueChange={setAlertsEnabled} />
        </View>

        <View style={styles.divider} />

        <View style={styles.settingRow}>
          <View style={styles.settingTextArea}>
            <Text style={[styles.settingTitle, largeText && styles.largeBody]}>Large text test mode</Text>
            <View style={styles.fixedDescriptionArea}>
              <Text style={[styles.settingDescription, largeText && styles.largeDescription]}>
                Enlarge text to review accessibility and layout behavior.
              </Text>
            </View>
          </View>
          <Switch value={largeText} onValueChange={setLargeText} />
        </View>
      </View>

      <View style={styles.aboutCard}>
        <Text style={[styles.aboutTitle, largeText && styles.largeBody]}>About this build</Text>
        <Text style={[styles.aboutLine, largeText && styles.largeSmall]}>Version 1.1.0</Text>
        <Text style={[styles.aboutLine, largeText && styles.largeSmall]}>Build 18</Text>
        <Text style={[styles.aboutLine, largeText && styles.largeSmall]}>Environment: QA demonstration</Text>
      </View>

      <Text style={[styles.footerNotice, largeText && styles.largeSmall]}>
        This application is a fictional portfolio demonstration. It does not connect to real financial accounts or collect personal information.
      </Text>
    </ScrollView>
  );
}

function BottomNavigation({ activeTab, setActiveTab, largeText }) {
  const tabs = ['Home', 'Transactions', 'Settings'];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => (
        <Pressable key={tab} onPress={() => setActiveTab(tab)} style={styles.navButton}>
          <Text
            style={[
              styles.navText,
              activeTab === tab && styles.navTextActive,
              largeText && styles.largeSmall,
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('pinehaven-alerts-enabled').then((savedValue) => {
      if (savedValue !== null) {
        setAlertsEnabled(savedValue === 'true');
      }
    });
  }, []);

  const updateAlertsEnabled = async (value) => {
    setAlertsEnabled(value);
    await AsyncStorage.setItem('pinehaven-alerts-enabled', String(value));
  };

  if (!entered) {
    return (
      <SafeAreaView style={[styles.safeArea, Platform.OS === 'android' && styles.androidSafeArea]}>
        <StatusBar barStyle="light-content" backgroundColor="#12372a" />
        <View style={styles.welcomeScreen}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoLetter}>P</Text>
          </View>
          <Text style={styles.welcomeTitle}>Pinehaven Mobile</Text>
          <Text style={styles.welcomeSubtitle}>Portfolio demonstration</Text>
          <View style={styles.noticeBox}>
            <Text style={styles.noticeText}>
              This is not a real financial application. All names, balances, and transactions are fictional.
            </Text>
          </View>
          <Pressable style={styles.primaryButton} onPress={() => setEntered(true)}>
            <Text style={styles.primaryButtonText}>Continue as Demo Member</Text>
          </Pressable>
          <Text style={styles.buildText}>Version 1.1.0 - Build 18</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, Platform.OS === 'android' && styles.androidSafeArea]}>
      <StatusBar barStyle="light-content" backgroundColor="#12372a" />
      <AppHeader />
      <View style={styles.appBody}>
        {activeTab === 'Home' && <HomeScreen largeText={largeText} />}
        {activeTab === 'Transactions' && <TransactionsScreen largeText={largeText} />}
        {activeTab === 'Settings' && (
          <SettingsScreen
            alertsEnabled={alertsEnabled}
            setAlertsEnabled={updateAlertsEnabled}
            largeText={largeText}
            setLargeText={setLargeText}
          />
        )}
      </View>
      <View style={Platform.OS === 'android' && styles.androidBottomArea}>
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} largeText={largeText} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#12372a' },
  androidSafeArea: { paddingTop: StatusBar.currentHeight || 24 },
  androidBottomArea: { paddingBottom: 18, backgroundColor: '#ffffff' },
  welcomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    backgroundColor: '#f4f7f5',
  },
  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#12372a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoLetter: { color: '#ffffff', fontSize: 40, fontWeight: '800' },
  welcomeTitle: { color: '#12372a', fontSize: 28, fontWeight: '800' },
  welcomeSubtitle: { color: '#587066', fontSize: 16, marginTop: 6 },
  noticeBox: {
    backgroundColor: '#fff8dd',
    borderColor: '#e5c85b',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginTop: 28,
    marginBottom: 20,
  },
  noticeText: { color: '#594a12', textAlign: 'center', lineHeight: 20 },
  primaryButton: {
    width: '100%',
    backgroundColor: '#1c684b',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  buildText: { color: '#72827b', fontSize: 12, marginTop: 16 },
  header: {
    height: 64,
    backgroundColor: '#12372a',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: { color: '#ffffff', fontSize: 16, fontWeight: '900', letterSpacing: 1.8 },
  brandSub: { color: '#a9d5c2', fontSize: 9, letterSpacing: 1.4, marginTop: 2 },
  demoBadge: { backgroundColor: '#e6b94a', borderRadius: 12, paddingHorizontal: 10, paddingVertical: 5 },
  demoBadgeText: { color: '#23342d', fontSize: 10, fontWeight: '900' },
  appBody: { flex: 1, backgroundColor: '#f4f7f5' },
  screenContent: { padding: 18, paddingBottom: 30 },
  greeting: { color: '#183c2f', fontSize: 24, fontWeight: '800' },
  pageTitle: { color: '#183c2f', fontSize: 27, fontWeight: '800' },
  disclaimer: { color: '#687b73', fontSize: 12, marginTop: 5, marginBottom: 18 },
  balanceCard: { backgroundColor: '#1c684b', borderRadius: 16, padding: 20, marginBottom: 12 },
  balanceLabel: { color: '#cce4da', fontSize: 11, fontWeight: '700', letterSpacing: 0.8 },
  balanceTotal: { color: '#ffffff', fontSize: 34, fontWeight: '800', marginTop: 8 },
  accountCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e1e8e4',
  },
  accountName: { color: '#1f382f', fontSize: 16, fontWeight: '700' },
  accountBalance: { color: '#1f382f', fontSize: 17, fontWeight: '800' },
  mutedText: { color: '#73827c', fontSize: 12, marginTop: 3 },
  sectionTitle: { color: '#183c2f', fontSize: 19, fontWeight: '800', marginTop: 14, marginBottom: 9 },
  listCard: { backgroundColor: '#ffffff', borderRadius: 14, borderWidth: 1, borderColor: '#e1e8e4' },
  transactionRow: {
    minHeight: 67,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#edf1ef',
  },
  transactionDetails: { flex: 1, paddingRight: 12 },
  transactionName: { color: '#223a31', fontSize: 14, fontWeight: '700' },
  amount: { fontSize: 14, fontWeight: '800' },
  positive: { color: '#197247' },
  negative: { color: '#9b3434' },
  filterRow: { flexDirection: 'row', marginBottom: 12 },
  filterButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#b8c8c1',
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 6,
    borderRadius: 9,
    backgroundColor: '#ffffff',
  },
  filterButtonActive: { backgroundColor: '#1c684b', borderColor: '#1c684b' },
  filterText: { color: '#385247', fontSize: 12, fontWeight: '700' },
  filterTextActive: { color: '#ffffff' },
  resultCount: { color: '#687b73', fontSize: 12, marginBottom: 8 },
  settingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e1e8e4',
    marginTop: 18,
  },
  settingRow: { padding: 16, flexDirection: 'row', alignItems: 'center' },
  settingTextArea: { flex: 1, paddingRight: 12 },
  settingTitle: { color: '#223a31', fontSize: 15, fontWeight: '800' },
  fixedDescriptionArea: { marginTop: 4 },
  settingDescription: { color: '#687b73', fontSize: 12, lineHeight: 16 },
  divider: { height: 1, backgroundColor: '#e7ece9' },
  aboutCard: { backgroundColor: '#e8f1ed', borderRadius: 14, padding: 16, marginTop: 16 },
  aboutTitle: { color: '#183c2f', fontSize: 15, fontWeight: '800', marginBottom: 8 },
  aboutLine: { color: '#40584e', fontSize: 13, marginBottom: 4 },
  footerNotice: { color: '#718179', fontSize: 11, lineHeight: 16, textAlign: 'center', margin: 20 },
  bottomNav: {
    minHeight: 62,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dce5e0',
  },
  navButton: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
  navText: { color: '#718179', fontSize: 12, fontWeight: '700' },
  navTextActive: { color: '#176144' },
  largeTitle: { fontSize: 33 },
  largeHeading: { fontSize: 25 },
  largeBody: { fontSize: 21 },
  largeSmall: { fontSize: 17 },
  largeDescription: { fontSize: 21, lineHeight: 26 },
});
