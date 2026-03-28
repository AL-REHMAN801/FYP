import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Home from './Hometab';
import About from './About';
import Settings from './settingstab';

const renderScene = SceneMap({
  home: Home,
  about: About,
  settings: Settings,
});

const TabLayout = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'about', title: 'About', icon: 'information-circle' },
    { key: 'settings', title: 'Settings', icon: 'settings' },
  ];

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'blue' }}
          style={{
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#e0e0e0',
          }}
          activeColor="blue"
          inactiveColor="gray"
        />
      )}
      commonOptions={{
        icon: ({ route, color }) => (
          <Ionicons
            name={route.icon as keyof typeof Ionicons.glyphMap}
            size={24}
            color={color}
          />
        ),
      }}
    />
  );
};

export default TabLayout;