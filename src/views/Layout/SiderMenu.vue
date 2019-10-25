<template>
  <div class="sider-menu">
    <Menu :active-name="routerMenu[0].name" theme="dark" width="auto">
      <template v-for="(item, index) in routerMenu" >
        <Submenu v-if="item.children.length>1" :name="item.name" :key="index">
          <template slot="title">
            <Icon type="ios-cog" />
            {{item.name}}
          </template>
          <MenuItem v-for="(child, i) in item.children" :to="child.path" :name="index+'-'+ i" :key="index+'-'+ i">
            {{child.name}}
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="item.name" :to="item.childPath" :key="item.name">
          <Icon type="ios-cog" :key="index" />
          <span :key="item.name">{{item.name}}</span>
        </MenuItem>
      </template>
  </Menu>
  </div>
</template>

<script lang="ts">
import { routeList } from '@/router/router';
import { Vue, Component,  } from 'vue-property-decorator';

@Component
export default class SiderMenu extends Vue {
 
  get routerMenu() {
    return routeList.filter(item => {return !item.hide});
  }
}
</script>

<style lang="scss">

</style>

