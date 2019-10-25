<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <sider-menu></sider-menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop,  PropSync, Emit } from 'vue-property-decorator';
import SiderMenu from '@/views/Layout/SiderMenu';

@Component({
  components: {
    SiderMenu,
  },
})
export default class Main extends Vue {
  public name: string = 'Main';
  private isCollapsed: boolean =  false;
  get rotateIcon() {
    return [
      'menu-icon',
      this.isCollapsed ? 'rotate-icon' : '',
    ];
  }

  get menuitemClasses() {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : '',
    ];
  }
  @Emit()
  public collapsedSider(): void {
  // this.$refs.side1.toggleCollapse();
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
