import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface SigninEmailProps {
  url: string
}

export const SigninEmail = ({ url }: SigninEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi 👋,</Text>
        <Text style={paragraph}>
          Welcome to SaaS starter, Click the link below to sign in or sign up to
          your account.
        </Text>
        <Section style={btnContainer}>
          <Button pX={12} pY={12} style={button} href={url}>
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Ahmed&apos;s team
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
)

export default SigninEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}
