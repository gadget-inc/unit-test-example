import { RouteHandler } from "gadget-server";

/**
 * Route handler for GET hello
 *
 * See: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 */
const route: RouteHandler = async ({ request, reply, api, logger, connections }) => {
  // This route file will respond to an http request -- feel free to edit or change it!
  // For more information on HTTP routes in Gadget applications, see https://docs.gadget.dev/guides/http-routes

  await reply.type("application/json").send({"hello":"world"})
}

export default route;
