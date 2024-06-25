<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="fixed inset-0 flex items-center justify-center">
        <Transition name="modal-inner">
          <div v-if="modalActive" class="p-4 bg-white max-w-screen-md col rounded-lg">
            <slot />

            <div class="flex justify-end mt-4">
              <button
                  class="text-black bg-white border-secondary400 border-2 py-2 px-6 rounded-xl mr-4"
                  @click="$emit('close-modal')"
              >
                No
              </button>
              <button
                  class="text-white bg-secondary500 py-2 px-6 rounded-xl"
                  @click="$emit('delete-ttv')"
              >
                Yes
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  props: {
    modalActive: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close-modal', 'delete-ttv']
};
</script>

<style scoped>
.modal-outer-enter-active, .modal-outer-leave-active {
  transition: opacity 0.3s ease;
}
.modal-outer-enter-from, .modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active, .modal-inner-leave-active {
  transition: transform 0.3s ease;
}
.modal-inner-enter-from {
  transform: scale(0);
}
.modal-inner-leave-to {
  transform: scale(0);
}
</style>
