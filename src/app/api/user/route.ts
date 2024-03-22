export async function GET(request: Request) {
  return Promise.resolve({
    onmessage(...args: any[]) {
      console.log(args);
      return {
        key: "user",
      };
    },
  });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
