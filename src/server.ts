import app from "@/app";
import env from "@/config/env";

const port = env.PORT;

app.listen(port, () => {
  console.log(`API running at ${env.BACKEND_URL}`);
  console.log(`Environment: ${env.NODE_ENV}`);
});