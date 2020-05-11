<template>
  <div class="tab-pane col-12 col-md-10 col-lg-10 pt-4">
    <h1>Postfach</h1>
    <div class="row no-marginLR match-my-cols justify-content-center">
      <!-- Conversations -->
      <div class="col-12 col-md-12 col-xl-5">
        <div class="content-div p-3">
          <div class="row justify-content-between">
            <div class="col-7">
              <nav class="navbar navbar-light p-0 mb-1">
                <form class="form-inline">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span
                        id="basic-addon1"
                        class="input-group-text"
                      ><i class="fas fa-search" /></span>
                    </div>
                    <input
                      type="text"
                      class="form-control search-request"
                      placeholder="Suche"
                      aria-label="Suche"
                      aria-describedby="basic-addon1"
                    >
                  </div>
                </form>
              </nav>
            </div>
            <div class="col-5">
              <div class="dropdown float-right">
                <button
                  id="dropdownMenu2"
                  class="btn nav-link-loggedin dropdown-toggle text-muted"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    >
                    Alle
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    >
                    Ungelesen
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    >
                    Gelöscht
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    >
                    Favoriten
                  </label>
                  <label class="dropdown-item">
                    <input
                      id="option3"
                      type="radio"
                      name="options"
                      autocomplete="off"
                    >
                    Anhang
                  </label>
                  <button class="dropright dropdown-item">
                    <button
                      id="dropdownMenu3"
                      class="dropdown-item dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sortieren
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                      <label
                        class="dropdown-item text-primary"
                      >Sortieren nach</label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        >
                        Datum
                      </label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        >
                        Produkt
                      </label>
                      <label
                        class="dropdown-item text-primary"
                      >Reihenfolge</label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        >
                        Alte oben
                      </label>
                      <label class="dropdown-item">
                        <input
                          id="option3"
                          type="radio"
                          name="options"
                          autocomplete="off"
                        >
                        Neue oben
                      </label>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(value, key) in conversations"
            :key="key"
            @click="setRoom($event, key)"
          >
            <div
              class="row request new-request"
              :class="{ 'selected-request': key === activeConversation }"
            >
              <div class="col-2">
                <img
                  class="mt-2 mb-2"
                  src="~/assets/css/img/Avatar-kl.png"
                  alt="Responsive image"
                >
              </div>
              <div class="col-7">
                <p v-if="resolvedUsers && value.userId && resolvedUsers[value.userId]" class="font-weight-bolder mb-0 ml-4">
                  {{ resolvedUsers[value.userId].profile.firstname }} {{ resolvedUsers[value.userId].profile.lastname }}
                </p>
                <p class="mb-0 ml-4">
                  {{ value.subject }}
                </p>
              </div>
              <div class="col-12 col-md-3">
                <p
                  v-if="value.messages && value.messages.length > 0"
                  class="text-muted text-small text-right"
                >
                  {{ value.messages[value.messages.length - 1].createdAt | moment("from", "now", true) }}
                </p>
              </div>
            </div>
            <hr class="m-0 grey-divider">
          </div>
        </div>
      </div>
      <!-- Chat -->
      <div class="col-12 col-md-12 col-xl-7">
        <div class="content-div p-4">
          <div class="row">
            <div class="col-1">
              <img src="~/assets/css/img/Avatar-kl.png" alt="Responsive image">
            </div>
            <div class="col-9">
              <p v-if="resolvedUsers && activeConversation && conversations[activeConversation] && resolvedUsers[conversations[activeConversation].userId]" class="font-weight-bolder mb-0 ml-4">
                {{ resolvedUsers[conversations[activeConversation].userId].profile.firstname }} {{ resolvedUsers[conversations[activeConversation].userId].profile.lastname }}
              </p>
              <p
                v-if="conversations && conversations[activeConversation]"
                class="mb-0 ml-4 text-black-50"
              >
                {{ conversations[activeConversation].subject }}
              </p>
            </div>
            <div class="col-2">
              <p class="text-black-50 text-small text-right">
                <i class="fas fa-trash mr-2" />
              </p>
            </div>
          </div>
          <hr class="fulldivider">
          <div
            v-if="conversations && conversations[activeConversation]"
            id="chat-box"
            class="chatbox"
          >
            <div
              v-for="(item, index) in conversations[activeConversation].messages"
              :key="index"
              class="p-2 pl-4 m-2"
              :class="{
                'chatbubble-you ml-auto': item.user === user,
                'chatbubble-customer text-light': item.user !== user
              }"
            >
              <div v-if="item.documentId" :style="{ backgroundImage: `url(${image(item.documentId)})` }" class="chat-attachment" />{{ item.message }}
            </div>
          </div>
          <p v-if="uploading" class="text-center mx-auto">
            ...uploading
          </p>
          <hr class="fulldivider">
          <form @submit.prevent="sendDirectMessage">
            <div class="textfield-chat p-3">
              <textarea v-model="message" class="form-control chatinput p-1 messageArea" placeholder="Schreibe hier deine Nachricht..." style="resize: none;" />
              <div class="row">
                <div class="col-10">
                  <p class="text-black-50 text-small text-left mt-4 ml-2 mb-0">
                    <file-upload
                      ref="upload"
                      class="chataction"
                      :custom-action="uploadFiles"
                      extensions="gif,jpg,jpeg,png,webp"
                      accept="image/png,image/gif,image/jpeg,image/webp"
                      :multiple="true"
                      :value="files"
                      @input="inputUpdate"
                    >
                      <i class="fas fa-paperclip mr-2" />
                    </file-upload>
                    <a href="#"><i class="far fa-grin" /></a>
                  </p>
                </div>
                <div class="col-2">
                  <img
                    class="mt-4 ml-2 mb-0 float-right"
                    src="~/assets/css/img/Pfad 299.png"
                    alt="Responsive image"
                    @click="sendDirectMessage"
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import FileUpload from 'vue-upload-component'
import { mapGetters } from 'vuex'
import autosize from 'autosize'

export default {
  layout: 'login',
  components: {
    FileUpload
  },
  data () {
    return {
      message: '',
      messages: [],
      room: '',
      userToSend: '',
      user: this.$auth.loggedIn ? this.$auth.user.data.id : '',
      users: {},
      resolvedUsers: {},
      socket: io('https://socket.my-techniker.de', { transports: ['websocket'] }),
      activeConversation: '',
      files: [],
      uploading: false,
      conversations: {}
    }
  },
  computed: {
    ...mapGetters({
      conversations2: 'conversations/get'
    })
  },
  mounted () {
    const vm = this
    vm.socket.emit('connected', vm.user)

    this.socket.on('CONNECTED', function (data) {
      console.log('connected: ', data)
      vm.users = data
    })

    this.socket.on('MESSAGE', function (data) {
      vm.messages = [...vm.messages, data]
    })

    this.socket.on('ROOM_INIT', function (data) {
      console.log('ROOM_INIT')
      vm.room = data
    })

    this.socket.on('ROOM_INIT_DATA', function (data) {
      console.log('ROOM_INIT_DATA')
      vm.messages = data.data || []
    })

    this.socket.on('NEW_ROOM_MESSAGE', function (data) {
      console.log('NEW_ROOM_MESSAGE')
      const {
        messageObject,
        room
      } = data
      vm.conversations[room].messages.push(messageObject)
      if (vm.activeConversation === room) {
        setTimeout(vm.scrollToBottom, 500)
      }
    })

    this.socket.on('USER_ROOMS', function (data) {
      console.log('USER_ROOMS')
      const dataWithMessages = data
      const roomIds = []
      const conversations = dataWithMessages.reduce((acc, next) => {
        const userId = (next.roomId || '')
          .replace('|', '')
          .replace(vm.user, '')
        acc[next.roomId] = Object.assign(next, { userId })
        roomIds.push(next.roomId)
        return acc
      }, {})

      let defaultConversation = vm.$route.query.conversation
      if (!conversations[defaultConversation] && dataWithMessages.length > 0) {
        defaultConversation = dataWithMessages[0].roomId
      }

      vm.conversations = conversations
      vm.getUsers(roomIds)
      vm.activeConversation = defaultConversation
      setTimeout(vm.scrollToBottom, 500)
    })

    setTimeout(vm.scrollToBottom, 500)
    autosize(document.querySelector('.messageArea'))
  },
  methods: {
    async getUsers (roomIds) {
      const vm = this
      const userIds = []
      roomIds.forEach((roomId) => {
        const roomContacts = roomId.split('|').filter(i => !!i)
        userIds.push(...roomContacts)
      })
      try {
        const { data } = await this.$axios.$post('/users/multiple', { ids: userIds })
        vm.resolvedUsers = data.reduce((acc, next) => {
          acc[next.id] = next
          return acc
        }, {})
      } catch (error) {}
    },
    createRoom (e, conversation) {
      if (e) {
        e.preventDefault()
      }
      const vm = this
      const { userId } = conversation
      vm.activeConversation = conversation
      vm.socket.emit('create_room', {
        user1: vm.user,
        user2: userId
      })
    },
    setRoom (e, conversation) {
      if (e) {
        e.preventDefault()
      }
      const vm = this
      const { messages } = conversation
      vm.activeConversation = conversation
      vm.messages = messages
      setTimeout(vm.scrollToBottom, 300)
    },
    sendDirectMessage (e) {
      e.preventDefault()
      const vm = this
      if ((vm.message || '').trim().length === 0) {
        return
      }
      debugger
      if (vm.activeConversation === '') {
        console.error('No room found.')
      } else {
        vm.socket.emit('send_message_to', {
          room: vm.activeConversation,
          message: vm.message.replace(/^\s*|\s*$/g, '')
        })
      }
      vm.message = ''
      setTimeout(vm.scrollToBottom, 500)
    },
    sendAttachmentMessage (id) {
      const vm = this
      if (vm.activeConversation === '') {
        console.error('No room found.')
      } else {
        vm.socket.emit('send_message_to', {
          room: vm.activeConversation,
          message: '',
          documentId: id
        })
      }
      vm.message = ''
      setTimeout(vm.scrollToBottom, 500)
    },
    async inputUpdate (files) {
      this.uploading = true
      const uploadedFiles = []
      const config = {}
      try {
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData()
          const file = files[i]
          formData.append('file', file.file)
          const { data } = await this.$axios.$post('/file', formData, config)
          uploadedFiles.push(data)
        }
        uploadedFiles.forEach(uploadedFile => this.sendAttachmentMessage(uploadedFile.id))
      } catch (error) {}
      this.uploadFiles()
      setTimeout(this.scrollToBottom, 500)
    },
    enhanceFiles (files) {
      return files.map((file) => {
        file.blob = ''
        file.thumb = ''
        const url = window.URL || window.webkitURL
        if (url && url.createObjectURL) {
          file.blob = url.createObjectURL(file.file)
        }
        if (file.blob && file.type.substr(0, 6) === 'image/') {
          file.thumb = file.blob
        }
        return file
      })
    },
    uploadFiles () {
      this.files = []
      this.uploading = false
    },
    image: id => `https://api.my-techniker.de/files/${id}`,
    scrollToBottom () {
      const elem = document.getElementById('chat-box')
      if (!elem) {
        return
      }
      elem.scrollTop = elem.scrollHeight
    }
  }
}
</script>

<style></style>
