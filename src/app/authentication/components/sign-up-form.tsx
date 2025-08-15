'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import z from "zod"

const formSchema = z.object({
  nome: z.string('E-mail inválido').trim().min(1, "Nome é obrigatório"),
  email: z.email('E-mail inválido'),
  password: z.string().min(8, 'Senha inválida'),
  passwordConfirmation: z.string().min(8, 'Senha inválida')
})
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation
    },
    {
      error: "Senhas não coincidem",
      path: ["passwordConfirmation"]
    }
  )

type FormValues = z.infer<typeof formSchema>

const SignUpForm = () => {

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })

  //testa o formulário
  function onSubmit(values: FormValues) {
    console.log("FORMULÁRIO VÁLIDO E ENVIADO!")
    console.log(values)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Criar Conta</CardTitle>
          <CardDescription>
            Crie uma conta para continuar.
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua senha" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite sua senha novamente" type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">Criar Conta</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  )
}


export default SignUpForm;