import { DialogClose, DialogContent, DialogDescription } from './ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { Button } from './ui/button'
import { X } from 'lucide-react'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className=" flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form action="" className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Qual a atividade?</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios, meditar, etc..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <RadioGroup id="desiredWeeklyFrequency">
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    1x na semana
                  </span>
                  <span>🥱</span>
                </RadioGroupItem>

                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    2x na semana
                  </span>
                  <span>🙂</span>
                </RadioGroupItem>

                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    3x na semana
                  </span>
                  <span>😜</span>
                </RadioGroupItem>

                <RadioGroupItem value="4">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    4x na semana
                  </span>
                  <span>🤨</span>
                </RadioGroupItem>

                <RadioGroupItem value="5">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    5x na semana
                  </span>
                  <span>🤨</span>
                </RadioGroupItem>

                <RadioGroupItem value="6">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    6x na semana
                  </span>
                  <span>🤯</span>
                </RadioGroupItem>

                <RadioGroupItem value="7">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-medium leading-none">
                    Todos os dias
                  </span>
                  <span>🔥</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center py-4 gap-3">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
