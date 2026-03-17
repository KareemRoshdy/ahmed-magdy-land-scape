"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون على الأقل حرفين.")
    .max(32, "الاسم يجب ألا يتجاوز 32 حرفًا."),

  phone: z
    .string()
    .min(10, "رقم الهاتف يجب أن يكون على الأقل 10 رقمًا.")
    .max(15, "رقم الهاتف يجب ألا يتجاوز 15 رقمًا."),

  message: z
    .string()
    .min(10, "الرسالة يجب أن تكون على الأقل 10 أحرف.")
    .max(200, "الرسالة يجب ألا تتجاوز 200 حرف."),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const phone = "201119669558";

    const message = `الاسم: ${data.name}\nرقم الجوال: ${data.phone}\nالرسالة: ${data.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    form.reset();
  }

  return (
    <Card className="w-full sm:max-w-md z-20">
      <CardHeader className="z-20">
        <CardTitle className="z-20">تواصل معنا</CardTitle>
        <CardDescription className="z-20">
          اترك لنا رسالة وسنتواصل معك
        </CardDescription>
      </CardHeader>
      <CardContent className="z-20">
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
          className="z-20"
        >
          <FieldGroup className="z-20">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-name">الاسم</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="أدخل الاسم"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-phone">
                    رقم الجوال
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="أدخل رقم الجوال"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-message">
                    الرسالة
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-rhf-demo-message"
                    aria-invalid={fieldState.invalid}
                    placeholder="أدخل الرسالة"
                    autoComplete="off"
                    rows={5}
                    className="resize-none min-h-[100px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="z-20">
        <Field orientation="horizontal">
          <Button type="submit" form="form-rhf-demo">
            ارسال
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            محو الحقول
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
