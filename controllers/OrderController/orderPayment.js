const stripe = require("stripe")(
  "sk_test_51JnsD9LTs9CoXxdPkZ5EvMVENcV6eaZvKIpdllQ5kM1R5ECnIHkWS60s62MrPxEdpaL4gVEzoN90bKXSyMEyalG300TeBfkEhB"
);

module.exports = async function (req, res) {
  console.log(req.body.total);
  const total = 100;
  try {
    console.log(total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "eur",
      payment_method_types: ["card", "sofort", "giropay", "p24", "eps"],
    });
    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
