pub mod crypt;

use neon::prelude::*;

fn encrypt(mut cx: FunctionContext) -> JsResult<JsString> {
    let payload: Handle<JsString> = cx.argument::<JsString>(0)?;
    Ok(cx.string(crypt::encrypt_payload(&payload.value())))
}

fn decrypt(mut cx: FunctionContext) -> JsResult<JsString> {
    let payload: Handle<JsString> = cx.argument::<JsString>(0)?;
    Ok(cx.string(crypt::decrypt_payload(&payload.value())))
}

register_module!(mut cx, {
    cx.export_function("encrypt", encrypt)?;
    cx.export_function("decrypt", decrypt)?;
    Ok(())
});
