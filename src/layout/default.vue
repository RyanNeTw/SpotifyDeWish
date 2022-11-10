<template>
  <div class="layout h-screen overflow-hidden flex flex-col">
    <nav class="h-20 p-4 bg-stone-500 shrink-0">
      Nav
    </nav>
    <div class="flex-grow overflow-y-auto">
      <router-view></router-view>
    </div>
    <div class="h-20 bg-slate-400 shrink-0 flex items-center justify-center">
      Player
    </div>
  </div>
</template>