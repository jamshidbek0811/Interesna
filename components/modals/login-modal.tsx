"use client"

import { loginSchema } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useState } from "react"
import { Input } from "../ui/input"
import Button from "../ui/button"
import Modal from "../ui/modal"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import axios from "axios"
import { AlertCircle } from "lucide-react"
import { signIn } from "next-auth/react"
import userLoginModal from "@/hooks/user-login-modal"

const LoginModal = () => {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const loginModal = userLoginModal()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
      setIsLoading(true)
      try {
        const response = await axios.post(`/api/auth/login`, {
          email: values.email,
          password: values.password
        })
        if(response.data.succes){
          signIn("credentials", {
            email: values.email,
            password: values.password,
          })
          loginModal.onClose()
        }else {
          setTimeout(() => {
            setError("")
          }, 3000)
          setError(response.data.message)
        }
      } catch (error: any) {
        setError(error.response.data.message || "Something went wrong! Please try again later!")
      } finally{
        setIsLoading(false)
      }
  }
  
  const bodyContent =  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-8">
      <h2 className="text-bold text-2xl text-center text-white">Sign In</h2>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}

    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Email" {...field} />
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
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="Create your password" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  <Button label={"Login"} type="submit" secondary fullWidth large isLoading={isLoading} />
  </form>
  </Form>
  return (
    <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose} body={bodyContent} />
  )
}

export default LoginModal