import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function CreateSnippet() {
  const router = useRouter();

  const [snippet, setSnippet] = useState("");

  const saveSnippet = async () => {
    const response = await fetch("/api/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        snippet,
      }),
    });
    const createdSnippet = await response.json();
    router.push(`/${createdSnippet.slug}`);
  };

  return (
    <div className="text-center mt-5">
      <h1>Upload your snippet now!</h1>
      <p>
        PasteBin whatever text you want in the textarea below, save it, and
        share the link with friends.
      </p>

      <Form>
        <Form.Group class="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            style={{
              margin: "0 auto",
              width: "600px",
              height: "400px",
            }}
            onChange={(e) => setSnippet(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button onClick={saveSnippet} variant="outline-info">
          Save your Snippet
        </Button>
      </Form>
    </div>
  );
}
