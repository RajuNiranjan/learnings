import { create } from "zustand";
import toast from "react-hot-toast";
import AxiosInstance from "../lib/axios";

const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await AxiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await AxiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelectedUser: (selectedUser) => {
    console.log("selectedUser", selectedUser);
    set({ selectedUser: selectedUser });
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    if (!selectedUser) {
      throw new Error("No user selected");
    }

    console.log("selectedUser to send message", selectedUser);

    set({ isSendingMessage: true });
    try {
      const res = await AxiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      console.log("res", res);

      set({ messages: [...messages, res.data] });
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      set({ isSendingMessage: false });
    }
  },
}));

export default useChatStore;
