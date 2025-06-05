import { create } from 'zustand'

interface CreateState {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useCreateModal = create<CreateState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useCreateModal