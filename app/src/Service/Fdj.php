<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class Fdj
{
    /** */
    private $client;

    /**
     * 
     */
    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * Return the FDJ result
     */
    public function getResult()
    {
        try {
            $response = $this->client->request(
                'GET',
                'https://www.fdj.fr/api/service-draws/v1/games/euromillions/draws?include=results,addons&range=0-0'
            );

            $statusCode = $response->getStatusCode();

            $content = $response->getContent();
    
            return $response->toArray();

        } catch(Exception $e) {

            $errorMessage = $e->getMessage();
            $response = New Response();
            $response->setContent($errorMessage);

            $response->setStatusCode(Response::HTTP_BAD_REQUEST);
        }

        return $response;
    }   

}