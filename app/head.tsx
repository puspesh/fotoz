export default function Head() {
  const description = "Create awesome family avatars";
  const title = "Fotoz :: Generative AI based pic generator";
  const image = "https://fotoz.app/og-cover.jpg";

  return (
    <>
      <title>Fotoz :: Generative AI based pic generator</title>

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={image}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@puspesh" />
      <meta name="twitter:creator" content="@puspesh" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
