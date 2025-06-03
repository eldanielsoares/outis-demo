
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome")
    if (!hasSeenWelcome) {
      setIsOpen(true)
    }
    localStorage.setItem("hasSeenWelcome", "true")
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenWelcome", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bem-vindo!</DialogTitle>
          <DialogDescription>
          Você está acessando a versão demo da aplicação para <strong>Desktop</strong>.
          <br/>
          Esta versão foi otimizada para telas maiores, proporcionando uma melhor visualização, mais recursos e uma experiência mais confortável para navegação.
          Explore as funcionalidades disponíveis, teste os recursos e aproveite para conhecer como a plataforma se comporta em ambientes de desktop.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleClose}>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
