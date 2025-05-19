<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('cadastros', function (Blueprint $table) {
            $table->id(); // ID primário (auto-incremento)
            $table->string('email')->unique(); // Email único
            $table->string('senha'); // Senha (hash ou texto)
            $table->timestamps(); // Colunas created_at e updated_at
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cadastros');
    }
};
