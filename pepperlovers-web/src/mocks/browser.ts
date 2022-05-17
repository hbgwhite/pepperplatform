import { setupWorker, rest } from 'msw';

export const mocks = [
  rest.get('https://api.plcseedswap.com/login', (req, res, ctx) => {
    const user = req.url.searchParams.get('user');
    const password = req.url.searchParams.get('password');

    return res(
      ctx.status(200),
      ctx.json({
        token: `${user}-mock-jwt-token`,
      })
    );
  }),
  rest.get('https://api.plcseedswap.com/current', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: 'Pepper Lover',
      })
    );
  }),
  rest.get('https://api.plcseedswap.com/user/:user', (req, res, ctx) => {
    const { user } = req.params as { user: string };

    return res(
      ctx.status(200),
      ctx.json({
        name: `${user}`,
        email: `${user.replace(/\s/g, '')}@plcseedswap.com`,
      })
    );
  }),
];

const worker = setupWorker(...mocks);
worker.start();

export { worker, rest };
