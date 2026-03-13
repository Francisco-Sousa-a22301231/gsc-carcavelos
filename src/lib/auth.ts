export const SECRET_KEY = "GSC_SUPER_SECRET_CHANGE_IN_PROD";

export async function signData(data: object): Promise<string> {
  const encoder = new TextEncoder();
  const keyInfo = await crypto.subtle.importKey(
    'raw',
    encoder.encode(SECRET_KEY),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const payload = JSON.stringify(data);
  const signature = await crypto.subtle.sign('HMAC', keyInfo, encoder.encode(payload));

  const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return `${btoa(payload)}.${signatureBase64}`;
}

export async function verifyData(token: string): Promise<any | null> {
  try {
    const [payloadBase64, signatureBase64] = token.split('.');

    const encoder = new TextEncoder();
    const keyInfo = await crypto.subtle.importKey(
      'raw',
      encoder.encode(SECRET_KEY),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signature = Uint8Array.from(atob(signatureBase64), c => c.charCodeAt(0));
    const isValid = await crypto.subtle.verify('HMAC', keyInfo, signature, encoder.encode(atob(payloadBase64)));

    if (isValid) {
      return JSON.parse(atob(payloadBase64));
    }
  } catch(e) { }
  return null;
}
