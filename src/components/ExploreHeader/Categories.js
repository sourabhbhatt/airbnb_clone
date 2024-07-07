import styles from './exploreHeaderStyles';
import COLORS from '../../constants/Colors';
import HapticFeedback from 'react-native-haptic-feedback';
import {Text, TouchableOpacity, FlatList, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useCallback, useRef, useMemo, useState, memo} from 'react';

const categories = [
  {name: 'Tiny homes', icon: 'home'},
  {name: 'Cabins', icon: 'house-siding'},
  {name: 'Trending', icon: 'local-fire-department'},
  {name: 'Play', icon: 'videogame-asset'},
  {name: 'City', icon: 'apartment'},
  {name: 'Beachfront', icon: 'beach-access'},
  {name: 'Countryside', icon: 'nature-people'},
];

const Categories = memo(({selectCategory}) => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const memoizedCategories = useMemo(() => categories, []);

  const handleCategoryPress = useCallback(
    index => {
      setActiveIndex(index);
      HapticFeedback.trigger('selection', {ignoreAndroidSystemSettings: false});
      selectCategory(categories[index].name);
      flatListRef.current?.scrollToIndex({index, animated: true});
    },
    [selectCategory],
  );

  const renderItem = useCallback(
    ({item, index}) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.categoriesBtn,
          activeIndex === index && styles.categoriesBtnActive,
        ]}
        onPress={() => handleCategoryPress(index)}>
        <MaterialIcons
          name={item.icon}
          size={24}
          color={activeIndex === index ? '#000' : COLORS.grey}
        />
        <Text
          style={[
            styles.categoryText,
            activeIndex === index && styles.categoryTextActive,
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    ),
    [activeIndex, handleCategoryPress],
  );

  const SeparatorComponent = () => <View style={styles.separator} />;

  return (
    <FlatList
      horizontal
      ref={flatListRef}
      renderItem={renderItem}
      data={memoizedCategories}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={SeparatorComponent}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.scrollViewContent}
    />
  );
});

export default Categories;
