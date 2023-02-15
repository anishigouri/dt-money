import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import imgLogo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imgLogo} alt="" />

        <Dialog.Root open={open}>
          <Dialog.Trigger asChild>
            <NewTransactionButton onClick={() => setOpen(true)}>
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setOpen={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
