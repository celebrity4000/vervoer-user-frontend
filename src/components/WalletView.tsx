import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import colors from '../assets/color';

interface WalletViewProps {
  onBack: () => void;
}

interface TransactionItem {
  id: string;
  type: 'Withdrew' | 'Deposited';
  amount: number;
  date: string;
  status: 'Done' | 'Pending' | 'Failed';
}

const TransactionRow: React.FC<TransactionItem> = ({
  type,
  amount,
  date,
  status,
}) => (
  <View style={styles.transactionRow}>
    <View>
      <Text style={styles.transactionType}>{type}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <View style={styles.amountContainer}>
      <Text
        style={[
          styles.transactionAmount,
          {color: type === 'Withdrew' ? '#000' : '#000'},
        ]}>
        {type === 'Withdrew' ? '-' : ''}${Math.abs(amount).toFixed(2)}
      </Text>
      <Text
        style={[
          styles.statusText,
          {color: status === 'Done' ? colors.primary : '#000'},
        ]}>
        {status}
      </Text>
    </View>
  </View>
);

const WalletView: React.FC<WalletViewProps> = ({onBack}) => {
  const balance = 2500.0;

  const transactions: TransactionItem[] = [
    {
      id: '1',
      type: 'Withdrew',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
    {
      id: '2',
      type: 'Deposited',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
    {
      id: '3',
      type: 'Withdrew',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
    {
      id: '4',
      type: 'Deposited',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
    {
      id: '5',
      type: 'Withdrew',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
    {
      id: '6',
      type: 'Deposited',
      amount: 1500.0,
      date: '25 APR 2021, 18:33:33',
      status: 'Done',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <IconButton icon="arrow-left" size={24} iconColor={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.depositButton}>
          <Text style={styles.depositButtonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* History Section */}
      <View style={styles.historySection}>
        <Text style={styles.historyTitle}>History</Text>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionRow {...item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 20,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  depositButton: {
    flex: 1,
    backgroundColor: '#666666',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  withdrawButton: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  depositButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  withdrawButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  historySection: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
    color: '#000',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: '#000',
  },
  transactionDate: {
    fontSize: 12,
    color: '#000',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 12,
  },
});

export default WalletView;
