<?php
namespace App\Traits;


trait ApiResponses
{
    /**
     * @param $data
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function successResponse($data, $code = 200)
    {
        return response()->json($data, $code);
    }

    /**
     * @param $message
     * @param $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function errorResponse($message, $code)
    {
        return response()->json(['errors' => $message, 'code' => $code], $code);
    }

    /**
     * @param $message
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function showMessage($message, $code = 200)
    {
        return $this->successResponse(['data' => $message], $code);
    }

    /**
     * @param $data
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function successResponseData($data, $code = 200)
    {
        return response()->json(['data' => $data, 'code' => $code], $code);
    }
}
