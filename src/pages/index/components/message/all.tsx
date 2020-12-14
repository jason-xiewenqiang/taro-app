import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtList} from 'taro-ui';
import 'taro-ui/dist/style/components/swipe-action.scss';
import 'taro-ui/dist/style/components/list.scss';
import 'taro-ui/dist/style/components/icon.scss';
import Item from './item';
export default class All extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        list: [
            {title: 'item1', note:'desci', time: '9:34', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item2', note:'desci', time: '10:39', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item3', note:'desci', time: '12:12', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'item', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
            {title: 'last', note:'desci', time: '1:09', icon: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'},
        ]
    }
  }

  render() {
    return (
      <View>
        <AtList>
          {this.state.list.map(li => <Item key={li.title} data={li}/>)}
        </AtList>
      </View>
    );
  }
}
