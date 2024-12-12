import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import colors from '../assets/color';

interface SearchViewProps {
  onClose: () => void;
  onBack: () => void;
}

interface KeywordProps {
  text: string;
  onRemove: () => void;
}

const Keyword: React.FC<KeywordProps> = ({text, onRemove}) => (
  <View style={styles.keywordContainer}>
    <Text style={styles.keywordText}>{text}</Text>
    <TouchableOpacity onPress={onRemove}>
      <IconButton icon="close" size={16} />
    </TouchableOpacity>
  </View>
);

const SearchView: React.FC<SearchViewProps> = ({onClose, onBack}) => {
  // Sample keywords - in a real app, these would come from state/storage
  const keywords = [
    {id: '1', text: 'Keyword 1'},
    {id: '2', text: 'Keyword 2'},
    {id: '3', text: 'Keyword 3'},
  ];

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchInputContainer}>
        <IconButton icon="magnify" size={24} style={styles.searchIcon} />
        <TextInput
          placeholder="Search here"
          style={styles.searchInput}
          placeholderTextColor="#666"
        />
        <IconButton
          icon="close"
          size={24}
          onPress={onClose}
          style={styles.closeIcon}
        />
      </View>

      {/* Recent Search Header */}
      <View style={styles.recentSearchHeader}>
        <TouchableOpacity onPress={onBack}>
          <IconButton
            icon="arrow-left"
            size={24}
            iconColor={colors.primary} // Using primary color from theme
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.recentSearchTitle}>Recent Search</Text>
      </View>

      {/* Keywords List */}
      <View style={styles.keywordsList}>
        {keywords.map(keyword => (
          <Keyword
            key={keyword.id}
            text={keyword.text}
            onRemove={() => {
              // Handle keyword removal
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    height: 48,
  },
  searchIcon: {
    margin: 0,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    marginLeft: 8,
  },
  closeIcon: {
    margin: 0,
  },
  recentSearchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  backIcon: {
    margin: 0,
  },
  recentSearchTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  keywordsList: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  keywordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  keywordText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchView;
